import { Stack } from "@chakra-ui/react";
import { NotifError, NotifSuccess, NotifWarning } from "../molecules/Notif";

const NotifToast = () => {
	return (
		<>
			<Stack
				id="notif-toast"
				pos="fixed"
				top="80px"
				right="15px"
				width="auto"
			>
				<NotifSuccess>Berhasil mengubah hak akses.</NotifSuccess>
				<NotifWarning>Silahkan mengubah hak akses terlebih dahulu.</NotifWarning>
				<NotifError>Gagal mengubah hak akses.</NotifError>
			</Stack>
		</>
	);
};

export default NotifToast;