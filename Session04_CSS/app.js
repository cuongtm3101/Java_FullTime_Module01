const histories = [
  {
    id: 1,
    totalPoint: 100,
    createdBy: "2024-06-20T09:21:21.000Z",
    createdAt: "2024-06-20T09:21:21.000Z",
    updatedAt: null,
    updatedBy: null,
    assignment: {
      id: 1,
      name: "JS cơ bản",
      createdBy: "2024-06-13T02:48:33.000Z",
      createdAt: "2024-06-13T02:48:33.000Z",
      updatedAt: null,
      updatedBy: null,
    },
    lesson: {
      id: 9,
      name: "HTML Basic",
      status: false,
      videoUrl: "https://www.youtube.com/watch?v=abPmZCZZrFA",
      document: "",
      createdBy: "2024-06-13T02:41:31.000Z",
      createdAt: "2024-06-13T02:41:31.000Z",
      updatedAt: null,
      updatedBy: null,
    },
  },
  {
    id: 2,
    totalPoint: 100,
    createdBy: "2024-06-20T09:21:21.000Z",
    createdAt: "2024-06-20T09:21:21.000Z",
    updatedAt: null,
    updatedBy: null,
    assignment: {
      id: 2,
      name: "JS Nâng cao",
      createdBy: "2024-06-13T02:48:33.000Z",
      createdAt: "2024-06-13T02:48:33.000Z",
      updatedAt: null,
      updatedBy: null,
    },
    lesson: {
      id: 10,
      name: "CSS Basic",
      status: false,
      videoUrl: "https://www.youtube.com/watch?v=SeWt7IpZ0CA",
      document: "",
      createdBy: "2024-06-13T02:41:31.000Z",
      createdAt: "2024-06-13T02:41:31.000Z",
      updatedAt: null,
      updatedBy: null,
    },
  },
  {
    id: 3,
    totalPoint: 50,
    createdBy: "2024-06-20T09:21:21.000Z",
    createdAt: "2024-06-20T09:21:21.000Z",
    updatedAt: null,
    updatedBy: null,
    assignment: {
      id: 1,
      name: "JS cơ bản",
      createdBy: "2024-06-13T02:48:33.000Z",
      createdAt: "2024-06-13T02:48:33.000Z",
      updatedAt: null,
      updatedBy: null,
    },
    lesson: {
      id: 11,
      name: "JS Basic",
      status: false,
      videoUrl: "https://www.youtube.com/watch?v=sG9JhIRuTkA",
      document: "",
      createdBy: "2024-06-13T02:41:31.000Z",
      createdAt: "2024-06-13T02:41:31.000Z",
      updatedAt: null,
      updatedBy: null,
    },
  },
  {
    id: 4,
    totalPoint: 80,
    createdBy: "2024-06-20T09:21:21.000Z",
    createdAt: "2024-06-20T09:21:21.000Z",
    updatedAt: null,
    updatedBy: null,
    assignment: {
      id: 2,
      name: "JS Nâng cao",
      createdBy: "2024-06-13T02:48:33.000Z",
      createdAt: "2024-06-13T02:48:33.000Z",
      updatedAt: null,
      updatedBy: null,
    },
    lesson: {
      id: 12,
      name: "JS Nâng cao",
      status: false,
      videoUrl: "https://www.youtube.com/watch?v=J4zrIbX1ROI",
      document: "",
      createdBy: "2024-06-13T02:41:31.000Z",
      createdAt: "2024-06-13T02:41:31.000Z",
      updatedAt: null,
      updatedBy: null,
    },
  },
];

const sessions = [
  {
    id: 5,
    name: "Session 01",
    status: false,
    createdBy: "2024-06-13T02:39:29.000Z",
    createdAt: "2024-06-13T02:39:29.000Z",
    updatedAt: null,
    updatedBy: null,
    lessons: [
      {
        id: 9,
        name: "",
        status: false,
        videoUrl: "https://www.youtube.com/watch?v=wGvNR0S47H8",
        document: "",
        createdBy: "2024-06-13T02:41:31.000Z",
        createdAt: "2024-06-13T02:41:31.000Z",
        updatedAt: null,
        updatedBy: null,
        assignments: [
          {
            id: 1,
            name: "JS cơ bản",
            createdBy: "2024-06-13T02:48:33.000Z",
            createdAt: "2024-06-13T02:48:33.000Z",
            updatedAt: null,
            updatedBy: null,
          },
        ],
      },
      {
        id: 10,
        name: "",
        status: false,
        videoUrl: "https://www.youtube.com/watch?v=NdHmXp2je10",
        document: "",
        createdBy: "2024-06-13T02:41:31.000Z",
        createdAt: "2024-06-13T02:41:31.000Z",
        updatedAt: null,
        updatedBy: null,
        assignments: [
          {
            id: 2,
            name: "JS Nâng cao",
            createdBy: "2024-06-13T02:48:33.000Z",
            createdAt: "2024-06-13T02:48:33.000Z",
            updatedAt: null,
            updatedBy: null,
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Session 02",
    status: false,
    createdBy: "2024-06-13T02:39:29.000Z",
    createdAt: "2024-06-13T02:39:29.000Z",
    updatedAt: null,
    updatedBy: null,
    lessons: [
      {
        id: 11,
        name: "",
        status: false,
        videoUrl: "https://www.youtube.com/watch?v=sNnIMacDGeU",
        document: "",
        createdBy: "2024-06-13T02:41:31.000Z",
        createdAt: "2024-06-13T02:41:31.000Z",
        updatedAt: null,
        updatedBy: null,
        assignments: [
          {
            id: 1,
            name: "JS cơ bản",
            createdBy: "2024-06-13T02:48:33.000Z",
            createdAt: "2024-06-13T02:48:33.000Z",
            updatedAt: null,
            updatedBy: null,
          },
        ],
      },
      {
        id: 12,
        name: "",
        status: false,
        videoUrl: "https://www.youtube.com/watch?v=an2Jh3ouLz8",
        document: "",
        createdBy: "2024-06-13T02:41:31.000Z",
        createdAt: "2024-06-13T02:41:31.000Z",
        updatedAt: null,
        updatedBy: null,
        assignments: [
          {
            id: 2,
            name: "JS Nâng cao",
            createdBy: "2024-06-13T02:48:33.000Z",
            createdAt: "2024-06-13T02:48:33.000Z",
            updatedAt: null,
            updatedBy: null,
          },
        ],
      },
    ],
  },
];

// Create a lookup map for histories
const historyMap = new Map();
histories.forEach((history) => {
  const key = `${history.lesson.id}-${history.assignment.id}`;
  historyMap.set(key, history.totalPoint);
});

sessions.forEach((session) => {
  session.totalPoint = 0;
  session.assPoints = [];
  session.lessons.forEach((lesson) => {
    lesson.assignments.forEach((assignment) => {
      const key = `${lesson.id}-${assignment.id}`;
      assignment.totalPoint = historyMap.get(key) || 0;
      session.totalPoint += 100;
      session.assPoints.push({
        [`${lesson.id}-${assignment.id}`]: historyMap.get(key) || 0,
      });
    });
  });
});

console.log(sessions);

let arr = [
  {
    "1-1": 100,
  },
  {
    "2-2": 100,
  },
];

let total = arr.reduce((pre, cur) => {
  return (pre += Object.values(cur)[0]);
}, 0);

console.log(total);
