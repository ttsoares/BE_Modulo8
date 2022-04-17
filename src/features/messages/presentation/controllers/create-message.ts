import { Request, Response } from "express";
import { Controller } from "../../../../core/presentation/contracts/controller";
import { MessageRepository} from "../../infra/repositories/messages.repository";

import { serverError, sucess, badRequest }
from "../../../../core/presentation/helpers/helpers";

export class CreateMessageController implements Controller{
	async handle(req: Request, res: Response): Promise<any> {
		try {
			const user_id = req.params.userid;
			const { description, details } = req.body;

			const repository = new MessageRepository();
			const message = await repository.createMessage({
				description: description,
				details: details,
				user_id: user_id
			});
			if (!message) return badRequest(res, "Problema ao escrever do DB !");
			return sucess(res, message);
		} catch (err:any) {
			return serverError(res, err);
		}
	}
}
