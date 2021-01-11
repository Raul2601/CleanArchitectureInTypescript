import { IBaseBusiness } from "app/business/interfaces/base/IBaseBusiness";
import { IReadController } from "../common/IReadController";
import { IWriteController } from "../common/IWriteController";

export interface IBaseController<T extends IBaseBusiness<Object>> extends IReadController, IWriteController {


} 