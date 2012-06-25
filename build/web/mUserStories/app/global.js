/**
 * Copyright 2012, Raxa
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

//var HOST = 'http://motech.rcg.usm.maine.edu/motech-platform-server/'
var HOST='http://174.129.222.130:8080/motech-platform-server/';
var MRSHOST='http://raxaemr.jelastic.tsukaeru.net';
var PAGES={
    LOGIN_SCREEN:0,
    CONFIRM_LOC:1,
    PATIENT_LIST:2,
    PATIENT_DET:3,
    ADD:4
};
var USER="";
var CURR_DATE=new Date();
var LOCATION="";