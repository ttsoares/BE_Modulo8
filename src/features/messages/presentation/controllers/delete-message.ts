import { Request, Response } from "express";
import { Controller } from "../../../../core/presentation/contracts/controller";
import { MessageRepository} from "../../infra/repositories/messages.repository";

import { serverError, sucess, notFound }
from "../../../../core/presentation/helpers/helpers";

export class DeleteMessageController implements Controller{
	async handle(req: Request, res: Response): Promise<any> {

		try {
			const message_id = req.params.messageid;
			const repository = new MessageRepository();
			const removedMessage = await repository.delete(message_id)

			if(!removedMessage) return notFound(res);
			return sucess(res, removedMessage);
} catch (err:any) {
			return serverError(res, err);
		}
	}
}
