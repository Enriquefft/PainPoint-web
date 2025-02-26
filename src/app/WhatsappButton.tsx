"use client";

import Image from "next/image";

export default function WhatsappButton() {
	return <a href="https://wa.me/+18573494519" rel="noreferrer" target="_blank">
				<Image
					src="/whatsapp_button/ChatOnWhatsAppButton/WhatsAppButtonGreenLarge.svg"
					alt="WhatsApp icon"
					className="cursor-pointer"
					height="40"
					width="200"
				/>
	</a>
}
