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
Ext.define('villageCoordinator.controller.basic',{
    extend:'Ext.app.Controller',
    controllers:['basic'],
    views:['login','notifications','scheduling'],
    config:{
        refs:{},
        control:{}
    },
    launch:function(){
        Ext.create('Ext.Container',{
            id:'viewPort',
            fullscreen:true,
            layout:'card',
            items:[{
                xclass:'villageCoordinator.view.notifications'
            },{
                xclass:'villageCoordinator.view.login'
            },{
                xclass:'villageCoordinator.view.scheduling'
            }]
        })
    },
    // login to the application
    doLogin:function(arg){
        if(arg){
            // store items
            USER=Ext.getCmp('username').getValue();
            var pass=Ext.getCmp('password').getValue();
            if(USER==''||pass==''){
                Ext.Msg.alert("Error","Please fill in all fields")
            }else{
                this.saveBasicAuthHeader(USER,pass);
            }
        }else{
            // exit the program
            this.doExit();
        }
    },
    saveBasicAuthHeader:function(username,password){
        // delete existing logged in sessions
        Ext.Ajax.request({
            url:MRSHOST+'/ws/rest/v1/session',
            withCredentials:true,
            useDefaultXhrHeader:false,
            method:'DELETE',
            success:function(){}
        })
        // check login and save to localStorage if valid
        Ext.Ajax.request({
            url:MRSHOST+'/ws/rest/v1/session',
            withCredentials: true,
            useDefaultXhrHeader: false,
            headers: {
                "Accept": "application/json",
                "Authorization": "Basic " + window.btoa(username + ":" + password)
            },
            success: function (response) {
                CONNECTED=true;
                var authenticated = Ext.decode(response.responseText).authenticated;
                if (authenticated) {
                    localStorage.setItem("basicAuthHeader", "Basic " + window.btoa(username + ":" + password));
                    helper.loginContinue();
                } else {
                    localStorage.removeItem("basicAuthHeader");
                    Ext.Msg.alert("Error","Please try again")
                }
            },
            failure:function(response){
                CONNECTED=false;
                // hash user/pass
                var hashPass='Basic ' + window.btoa(username+":"+password);
                var hashStored=localStorage.getItem('basicAuthHeader');
                // compare hashPass to hashStored
                if(hashPass===hashStored){
                    helper.loginContinue();
                }else{
                    Ext.Msg.alert("Error","Please try again")
                }
            }
        })
    }
})