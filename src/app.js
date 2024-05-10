const { sequelizeManager } = require("./managers");
const Sequelize = require("sequelize");
const { Op } = Sequelize;
const dayjs = require("dayjs");

const fetch_events = async () => {
  try {
    const all_events = await sequelizeManager.EventModel.findAll({
      attributes: [
        "id",
        "name",
        [
          sequelizeManager.sequelize.literal("DATE_ADD(start_date, INTERVAL start_date_tz_offset HOUR_MINUTE)"),
          "date",
        ],
      ],
      raw: true,
      where: {
        end_date: {
          [Op.gte]: new Date(), // Get events with end date >= current date
        },
      },
    });
    

    const duplicateEvents = [];
    const uniqueEvents = [];
    const seenEvents = new Map();
    const totalEvents = all_events.length;
    let processedEvents = 0;

    all_events.forEach(event => {
      const { id, name, date } = event;
      let isDuplicate = false;

      seenEvents.forEach(seenEvent => {
        const { name: seenName, date: seenDate } = seenEvent;
        const nameLength = name.length;
        const seenNameLength = seenName.length;
        const minLength = Math.min(nameLength, seenNameLength);
        let matchCount = 0;

        for (let i = 0; i < minLength; i++) {
          if (name[i] === seenName[i]) {
            matchCount++;
          }
        }

        const matchPercentage = (matchCount / minLength) * 100;

        if (matchPercentage >= 50 && date === seenDate) {
          isDuplicate = true;
          return;
        }
      });

      if (isDuplicate) {
        duplicateEvents.push(event);
      } else {
        uniqueEvents.push(event);
        seenEvents.set(id, { name, date });
      }

      processedEvents++;
      const progressPercentage = (processedEvents / totalEvents) * 100;
      console.log(`Progress: ${progressPercentage.toFixed(2)}%`);
    });

    console.log("Duplicate Events:", duplicateEvents);
    // console.log("Unique Events:", uniqueEvents);

    return { duplicateEvents, uniqueEvents };
  } catch (error) {
    console.error(error);
    return { duplicateEvents: [], uniqueEvents: [] };
  }
};

fetch_events();
