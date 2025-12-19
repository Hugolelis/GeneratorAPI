import { baseErrors } from './base-errors';

import { _UUID } from '../../helpers/types/type-UUID'

export class uuidErrors extends baseErrors 
{
    static ensure(uuid: _UUID) 
    {
        if(!uuid) return this.throwMissing("UUID")
    }
}