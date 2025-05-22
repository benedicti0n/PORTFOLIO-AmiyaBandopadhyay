import { NextResponse } from 'next/server';
import Image from '@/models/Image';
import connectDB from '@/lib/db';

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        await connectDB();
        
        const image = await Image.findById(params.id);
        if (!image) {
            return new NextResponse('Image not found', { status: 404 });
        }

        // Create response with binary data and correct content type
        const response = new NextResponse(image.data);
        response.headers.set('Content-Type', image.contentType);
        return response;

    } catch (error) {
        console.error('Error fetching image:', error);
        return new NextResponse('Error fetching image', { status: 500 });
    }
}
