import { RequestHandler } from 'express-serve-static-core';
import { Request, Response } from 'express';
import * as path from 'path';
import * as fs from 'fs';
import fromDir from './filepathsFromDir';
import getOverviewdataFrom from './getOverviewdataFrom';

export interface ComponentsRouteConfig {
  componentsFolder: string;
}

const createComponentsRoute = (config: ComponentsRouteConfig): RequestHandler =>
  (req: Request, res: Response) => {
    if (!fs.existsSync(path.join(__dirname, config.componentsFolder))) {
      throw Error(`no dir ${config.componentsFolder}`);
    }

    const files = fromDir(path.join(__dirname, config.componentsFolder), /package\.json$/);
    const fileContents = files
      .map(url => JSON.parse(fs.readFileSync(url, 'utf8')))
      .map(getOverviewdataFrom);
    res.send(fileContents);
  }

export default createComponentsRoute;
