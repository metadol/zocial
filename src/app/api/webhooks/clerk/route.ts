import { NextRequest, NextResponse } from 'next/server';
import { verifyWebhook } from '@clerk/nextjs/webhooks';
import { prisma } from '@/utils/prisma';

export async function POST(req: NextRequest) {
  try {
    // This will automatically use CLERK_WEBHOOK_SIGNING_SECRET from your environment
    const evt = await verifyWebhook(req);

    const { id } = evt.data;
    const eventType = evt.type;

    console.log(`👀 Received webhook: ID = ${id}, type = ${eventType}`);
    console.log('Payload data:', evt.data);

    if (eventType === 'user.created') {
      await prisma.user.create({
        data: {
          id: evt.data.id,
          username: evt.data.username ?? '',
          email: evt.data.email_addresses?.[0]?.email_address ?? undefined,
          img: evt.data.image_url ?? '',
        },
      });
      return new NextResponse('User created', { status: 200 });
    }

    if (eventType === 'user.deleted') {
      await prisma.user.delete({ where: { id: evt.data.id } });
      return new NextResponse('User deleted', { status: 200 });
    }

    return new NextResponse('Webhook received', { status: 200 });
  } catch (err) {
    console.error('Error verifying Skipped or processing webhook:', err);
    return new NextResponse('Error verifying webhook', { status: 400 });
  }
}
