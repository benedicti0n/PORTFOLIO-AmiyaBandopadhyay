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

export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        await connectDB();
        
        const { title, category, date } = await request.json();
        
        // Find the image by ID and update its details
        const updatedImage = await Image.findByIdAndUpdate(
            params.id,
            { 
                title,
                category,
                date: new Date(date)
            },
            { new: true } // Return the updated document
        );

        if (!updatedImage) {
            return new NextResponse('Image not found', { status: 404 });
        }

        return NextResponse.json(updatedImage);

    } catch (error) {
        console.error('Error updating image:', error);
        return new NextResponse('Error updating image', { status: 500 });
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        await connectDB();
        
        const deletedImage = await Image.findByIdAndDelete(params.id);
        
        if (!deletedImage) {
            return new NextResponse('Image not found', { status: 404 });
        }

        return new NextResponse('Image deleted successfully', { status: 200 });

    } catch (error) {
        console.error('Error deleting image:', error);
        return new NextResponse('Error deleting image', { status: 500 });
    }
}
