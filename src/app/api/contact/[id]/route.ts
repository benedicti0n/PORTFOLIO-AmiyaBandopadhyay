import { NextResponse } from 'next/server';
import Contact from '@/models/Contact';
import connectDB from '@/lib/db';

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    
    const deletedContact = await Contact.findByIdAndDelete(params.id);
    
    if (!deletedContact) {
      return new NextResponse('Contact not found', { status: 404 });
    }

    return new NextResponse('Contact deleted successfully', { status: 200 });
  } catch (error) {
    console.error('Error deleting contact:', error);
    return new NextResponse('Error deleting contact', { status: 500 });
  }
}
