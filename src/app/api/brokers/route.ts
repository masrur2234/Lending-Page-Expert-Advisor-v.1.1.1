// Broker API Routes
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// GET - Fetch all brokers
export async function GET() {
  try {
    const brokers = await db.broker.findMany({
      orderBy: [
        { isRecommended: "desc" },
        { order: "asc" },
        { createdAt: "desc" },
      ],
    });

    // If no brokers exist, create default one
    if (brokers.length === 0) {
      const defaultBroker = await db.broker.create({
        data: {
          name: "Exness",
          slug: "exness",
          description: "Broker terpercaya dengan spread rendah dan eksekusi cepat. Cocok untuk EA scalping dan auto trading. Deposit dan withdrawal instant!",
          link: "https://one.exnessonelink.com/a/whvtydd8u3?source=app",
          features: JSON.stringify([
            "Spread mulai 0.0 pips",
            "Leverage hingga 1:Unlimited",
            "Deposit/Withdrawal Instant",
            "No Swap Option",
            "MT4 & MT5 Support",
          ]),
          bonus: "Bonus Deposit Tersedia",
          rating: 5,
          isRecommended: true,
          order: 1,
        },
      });

      return NextResponse.json([defaultBroker]);
    }

    return NextResponse.json(brokers);
  } catch (error) {
    console.error("Error fetching brokers:", error);
    return NextResponse.json(
      { error: "Failed to fetch brokers" },
      { status: 500 }
    );
  }
}

// POST - Create a new broker
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, description, link, logoUrl, features, bonus, rating, isRecommended, order } = body;

    const broker = await db.broker.create({
      data: {
        name,
        slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        description,
        link,
        logoUrl,
        features: features ? JSON.stringify(features) : null,
        bonus,
        rating: rating || 5,
        isRecommended: isRecommended ?? true,
        order: order || 0,
      },
    });

    return NextResponse.json(broker, { status: 201 });
  } catch (error) {
    console.error("Error creating broker:", error);
    return NextResponse.json(
      { error: "Failed to create broker" },
      { status: 500 }
    );
  }
}
