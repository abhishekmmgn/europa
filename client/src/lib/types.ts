export type MessageType = {
	text: string;
	type: "text" | "train_list";
	sender: "ai" | "user";
	trains?: any[];
};

export type SocketStateType = {
	socket: Socket;
};
