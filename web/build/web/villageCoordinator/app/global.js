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

var HOST='http://174.129.222.130:8080/motech-platform-server/';
var MRSHOST='http://raxajss.jelastic.servint.net';
var PAGES={
    LOGIN:0,
    NOTIFICATIONS:1,
    SCHEDULING:2
};
var USER="";
var CURR_DATE=new Date();
var CONNECTED=false;
var helper = {
    loginContinue:function(){
        // continue to next page with proper settings
        // Ext.getCmp('welcome_label').setHtml("Welcome, "+USER+"<br>"+"This is your check in for "+CURR_DATE)
        // clear form fields
        Ext.getCmp('username').reset();
        Ext.getCmp('password').reset();
        // continue to next page
        Ext.getCmp('viewPort').setActiveItem(PAGES.NOTIFICATIONS)
    }
}
