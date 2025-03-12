import { Item } from '../model/Item';

export const list: Item[] = [
  {
    id: 1,
    name: 'name1',
    parent: null,
    children: [
      {
        id: 2,
        name: 'name2',
        parent: 1,
        children: [
          {
            id: 9,
            name: 'name9',
            parent: 2,
            children: [
              {
                id: 14,
                name: 'name14',
                parent: 9,
                children: [
                  {
                    id: 15,
                    name: 'name15',
                    parent: 14,
                    children: [
                      {
                        id: 42,
                        name: 'name42',
                        parent: 15,
                        children: [
                          {
                            id: 43,
                            name: 'name43',
                            parent: 42,
                            children: [
                              {
                                id: 44,
                                name: 'name44',
                                parent: 43,
                                children: [
                                  {
                                    id: 45,
                                    name: 'name45',
                                    parent: 44,
                                    children: [
                                      {
                                        id: 46,
                                        name: 'name46',
                                        parent: 45,
                                        children: [
                                          {
                                            id: 47,
                                            name: 'name47',
                                            parent: 46,
                                            children: [],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: 16,
                    name: 'name16',
                    parent: 14,
                    children: [],
                  },
                ],
              },
              {
                id: 17,
                name: 'name17',
                parent: 9,
                children: [],
              },
            ],
          },
          {
            id: 12,
            name: 'name12',
            parent: 2,
            children: [
              {
                id: 18,
                name: 'name18',
                parent: 12,
                children: [],
              },
              {
                id: 19,
                name: 'name19',
                parent: 12,
                children: [],
              },
            ],
          },
          {
            id: 13,
            name: 'name13',
            parent: 2,
            children: [
              {
                id: 20,
                name: 'name20',
                parent: 13,
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: 21,
        name: 'name21',
        parent: 1,
        children: [
          {
            id: 22,
            name: 'name22',
            parent: 21,
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'name3',
    parent: null,
    children: [
      {
        id: 5,
        name: 'name5',
        parent: 3,
        children: [
          {
            id: 10,
            name: 'name10',
            parent: 5,
            children: [
              {
                id: 23,
                name: 'name23',
                parent: 10,
                children: [],
              },
              {
                id: 24,
                name: 'name24',
                parent: 10,
                children: [],
              },
            ],
          },
          {
            id: 25,
            name: 'name25',
            parent: 5,
            children: [],
          },
        ],
      },
      {
        id: 26,
        name: 'name26',
        parent: 3,
        children: [
          {
            id: 27,
            name: 'name27',
            parent: 26,
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: 'name4',
    parent: null,
    children: [
      {
        id: 6,
        name: 'name6',
        parent: 4,
        children: [
          {
            id: 7,
            name: 'name7',
            parent: 6,
            children: [
              {
                id: 8,
                name: 'name8',
                parent: 7,
                children: [
                  {
                    id: 28,
                    name: 'name28',
                    parent: 8,
                    children: [],
                  },
                  {
                    id: 29,
                    name: 'name29',
                    parent: 8,
                    children: [],
                  },
                ],
              },
              {
                id: 30,
                name: 'name30',
                parent: 7,
                children: [],
              },
            ],
          },
          {
            id: 31,
            name: 'name31',
            parent: 6,
            children: [],
          },
        ],
      },
      {
        id: 32,
        name: 'name32',
        parent: 4,
        children: [
          {
            id: 33,
            name: 'name33',
            parent: 32,
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 34,
    name: 'name34',
    parent: null,
    children: [
      {
        id: 35,
        name: 'name35',
        parent: 34,
        children: [
          {
            id: 36,
            name: 'name36',
            parent: 35,
            children: [],
          },
          {
            id: 37,
            name: 'name37',
            parent: 35,
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 38,
    name: 'name38',
    parent: null,
    children: [],
  },
  {
    id: 39,
    name: 'name39',
    parent: null,
    children: [],
  },
  {
    id: 40,
    name: 'name40',
    parent: null,
    children: [],
  },
  {
    id: 41,
    name: 'name41',
    parent: null,
    children: [],
  },
];
