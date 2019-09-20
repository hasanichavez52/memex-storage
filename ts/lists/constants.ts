export const listCollectionName = 'customLists'
export const listEntryCollectionName = 'pageListEntries'

export const listCollectionDefinition = {
    [listCollectionName]: {
        version: new Date('2019-08-29'),
        fields: {
            id: { type: 'string' },
            name: { type: 'string' },
            isDeletable: { type: 'boolean' },
            isNestable: { type: 'boolean' },
            createdAt: { type: 'datetime' },
        },
        indices: [
            { field: 'id', pk: true },
            { field: 'name', unique: true },
            { field: 'isDeletable' },
            { field: 'isNestable' },
            { field: 'createdAt' },
        ],
    },
}

export const listCollectionHistory = [
    {
        version: new Date(2018, 6, 12),
        fields: {
            id: { type: 'string' },
            name: { type: 'string' },
            isDeletable: { type: 'boolean' },
            isNestable: { type: 'boolean' },
            createdAt: { type: 'datetime' },
        },
        indices: [
            { field: 'id', pk: true },
            { field: 'name', unique: true },
            { field: 'isDeletable' },
            { field: 'isNestable' },
            { field: 'createdAt' },
        ],
    },
    {
        version: new Date('2019-08-21'),
        fields: {
            id: { type: 'string' },
            name: { type: 'string' },
            isDeletable: { type: 'boolean' },
            isNestable: { type: 'boolean' },
            createdAt: { type: 'datetime' },
            updatedAt: { type: 'datetime', optional: true },
        },
        indices: [
            { field: 'id', pk: true },
            { field: 'name', unique: true },
            { field: 'isDeletable' },
            { field: 'isNestable' },
            { field: 'createdAt' },
        ],
    },
]

export const listEntryCollectionDefinition = {
    [listEntryCollectionName]: {
        version: new Date(2018, 6, 12),
        fields: {
            listId: { type: 'string' },
            pageUrl: { type: 'string' },
            fullUrl: { type: 'string' },
            createdAt: { type: 'datetime' },
        },
        indices: [
            { field: ['listId', 'pageUrl'], pk: true },
            { field: 'listId' },
            { field: 'pageUrl' },
        ],
    },
}