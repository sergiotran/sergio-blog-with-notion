import { Client } from '@notionhq/client'

export const notion = new Client({
  auth: process.env.NOTION_TOKEN
})

export const fetchNotionUsers = async () => {
  try {
    const users = await notion.users.list({});
    return users.results;
  } catch (error) {
    console.error("Cannot Fetch Notion Users, detail:", error);
    return [];
  }
}

export const fetchNotionDatabase = async (database_id: string = process.env.NOTION_DB_ID!) => {
  try {
    const databaseResponse = await notion.databases.query({
      database_id,
      filter: {
        type: 'status',
        property: 'Status',
        status: {
          equals: 'Published'
        }
      }
    })
    return databaseResponse.results;
  } catch (error) {
    console.error('Cannot Fetch Notion Database, detail:', error);
    return [];
  }
}
