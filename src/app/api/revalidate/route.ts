import {revalidatePath} from 'next/cache';
import {NextResponse} from 'next/server';

export async function POST() {
  try {
    revalidatePath('/[locale]', 'page')
    return NextResponse.json('Success', { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json('Internal Server Error', {status: 500});
  }
}
