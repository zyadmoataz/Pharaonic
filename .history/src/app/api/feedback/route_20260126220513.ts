import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const data = await request.json();
        
        // Forward to Make.com Strategic Webhook
        const makeResponse = await fetch('https://hook.us2.make.com/aNz3niH-5rAzTQg', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...data,
                submissionDate: new Date().toISOString(),
                source: 'Guidly Feedback Portal (Proxied)'
            }),
        });

        if (!makeResponse.ok) {
            throw new Error('Make.com transmission failed');
        }

        return NextResponse.json({ 
            status: 'Authorized', 
            message: 'Feedback archived in the Strategic Intelligence Layer.' 
        });
    } catch (error) {
        console.error('Feedback Error:', error);
        return NextResponse.json({ 
            status: 'Denied', 
            message: 'Intelligence transmission failed.' 
        }, { status: 500 });
    }
}
