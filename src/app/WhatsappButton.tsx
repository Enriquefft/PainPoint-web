"use client";

import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";

export default function WhatsappButton() {
	// <a href="https://wa.me/+18573494519" rel="noreferrer" target="_blank">
	// </a>
	return (
		<AlertDialog>
			<AlertDialogTrigger>
				<Image
					src="/whatsapp_button/ChatOnWhatsAppButton/WhatsAppButtonGreenLarge.svg"
					alt="WhatsApp icon"
					className="cursor-pointer"
					height="40"
					width="200"
				/>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>In progress</AlertDialogTitle>
					<AlertDialogDescription>
						We are still waiting for whatsapp to approve the phone numbers name.
						Meta is painfully slow, fml
					</AlertDialogDescription>
				</AlertDialogHeader>
			</AlertDialogContent>
		</AlertDialog>
	);
}
