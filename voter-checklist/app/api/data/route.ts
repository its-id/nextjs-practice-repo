import { Voter } from '@/types';

import fsPromises from 'fs/promises';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

const dataFilePath = path.join(process.cwd(), '/lib/data.json');

export async function GET() {
  try {
    const res = await fsPromises.readFile(dataFilePath, 'utf-8');
    const parsedData = JSON.parse(res);
    return NextResponse.json(parsedData?.data, { status: 200 });
  } catch (err) {
    console.log('error', err);
    return NextResponse.json(
      { message: 'Error fetching data' },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { id, remarks, status } = await req.json();
    const data: string = await fsPromises.readFile(dataFilePath, 'utf-8');
    const parsedData = JSON.parse(data);
    const updatedData: Voter[] = parsedData?.data.map((voter: Voter) => {
      if (voter.id === id) {
        return { ...voter, remarks, status };
      }
      return voter;
    });
    await fsPromises.writeFile(
      dataFilePath,
      JSON.stringify({ data: updatedData })
    );

    return NextResponse.json(
      { message: 'Data stored successfully' },
      { status: 200 }
    );
  } catch (err) {
    console.log('error', err);
    return NextResponse.json(
      { message: 'Error updating data' },
      { status: 500 }
    );
  }
}
