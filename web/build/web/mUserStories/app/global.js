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
    LOGIN_SCREEN:0,
    CONFIRM_LOC:1,
    PATIENT_LIST:2,
    PATIENT_DET:3,
    ADD:4,
    INBOX_CHW:5,
    RESOURCES:6,
    INBOX_VC:7,
    SCHEDULING:8
};
var USER=new Object();
USER.name='';
USER.type='CHW';
var CURR_DATE=new Date();
var LOCATION="";
var CONNECTED=false;
var helper = {
    listDisclose: function (record) { 
        Ext.getCmp('title_det').setTitle(record.get('familyName')+', '+record.get('givenName'))
        // navigate to details for specific patient and populate fields
        Ext.getCmp('first_det').setValue(record.get('givenName'));
        Ext.getCmp('last_det').setValue(record.get('familyName'));
        Ext.getCmp('address_det').setValue(record.get('cityVillage'));
        Ext.getCmp('gender_det').setValue(record.get('gender'));
        Ext.getCmp('bday_det').setValue(record.get('birthdate'))
        // change to next page
        Ext.getCmp('viewPort').setActiveItem(PAGES.PATIENT_DET)
    },
    loginContinue:function(){
        // clear form fields
        Ext.getCmp('username').reset();
        Ext.getCmp('password').reset();
        if(USER.type==='CHW'){
            // continue to next page with proper settings
            // Ext.getCmp('welcome_label').setHtml("Welcome, "+USER.name+"<br>"+"This is your check in for "+CURR_DATE)
            helper.doDownload();
            Ext.getCmp('viewPort').setActiveItem(PAGES.PATIENT_LIST)
        }else if(USER.type==='VC'){
            Ext.getCmp('viewPort').setActiveItem(PAGES.INBOX_VC)
        }
    },
    // Download patient with details
    doDownload:function(){
        var down_store=Ext.create('mUserStories.store.downStore');
        down_store.load();
        Ext.getCmp('patientlistid').setStore(down_store);
    // TODO: set patientcurrid to be subset of above organized by appt time
    // Do we need a separate store for this?
    }
}