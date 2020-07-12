import set1234 from '../data-1234.json';
import set4321 from '../data-4321.json';
import small from '../data-small.json';

import { NextApiRequest, NextApiResponse } from 'next'

const loadSetById = (id:string):{data:number[]} =>{
    switch(id){
        case '1234':
            return set1234;
        case '4321':
            return set4321;
        case 'small':
                return small;
        default:
            return ({data:[]});
    }
};
export default (req:NextApiRequest, res:NextApiResponse) => {
    const {
        query: { setId },
      } = req;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(loadSetById(setId as string)));
}