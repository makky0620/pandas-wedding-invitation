import { Companion } from '@/domain';
import { google } from 'googleapis';

export const POST = async (req: Request) => {
  const {
    name,
    kana,
    postCode,
    phoneNumber,
    address,
    attendance,
    invitation,
    note,
    companions,
  } = await req.json();
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.CLIENT_EMAIL,
      client_id: process.env.CLIENT_ID,
      private_key: process.env.PRIVATE_KEY?.replace(/\\n/g, '\n') ?? '',
    },
    scopes: [
      'https://www.googleapis.com/auth/drive',
      'https://www.googleapis.com/auth/drive.file',
      'https://www.googleapis.com/auth/spreadsheets',
    ],
  });

  const sheets = google.sheets({
    auth,
    version: 'v4',
  });

  const companionValues = companions.map((c: Companion) => [
    c.name.lastName,
    c.name.firstName,
    c.kana.lastName,
    c.kana.firstName,
    '',
    '',
    '',
    '',
    '',
    c.note,
  ]);

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range: 'Sheet1!A2:C',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [
        [
          name.lastName,
          name.firstName,
          kana.lastName,
          kana.firstName,
          postCode,
          address,
          phoneNumber,
          attendance,
          invitation,
          note,
        ],
        ...companionValues,
      ],
    },
  });

  return new Response('It works');
};
