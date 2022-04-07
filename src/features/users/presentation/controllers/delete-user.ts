import { Request, Response } from "express";
import { Controller } from "../../../../core/presentation/contracts/controller"
import { UserRepository } from "../../infra/repositories/user.repository"

import { serverError, sucess, badRequest }
from "../../../../core/presentation/helpers/helpers";

import { CacheRepository } from "../../../../core/infra/repositories/cache.repository";

export class DeleteUserController implements Controller{
	async handle(req: Request, res: Response): Promise<any> {
		try {
		const user_id = req.params.userid;

		const repository = new UserRepository();
    const removedUser = await repository.deleteUser(user_id);

		if (!removedUser) return badRequest(res, "usuário não foi removido");

		return sucess(res, removedUser);

	} catch (err:any) {
			return serverError(res, err);
		}
	}
}