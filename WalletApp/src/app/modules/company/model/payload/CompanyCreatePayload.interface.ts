import {PayloadInterface} from "@shared/model";

export interface CompanyCreatePayload extends PayloadInterface {
title: string;
address: string;
description: string;
}
