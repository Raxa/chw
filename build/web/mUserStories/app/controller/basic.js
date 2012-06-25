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

Ext.define('mUserStories.controller.basic',{
    extend:'Ext.app.Controller',
    controllers:['basic'],
    views:['loginScreen','confirmLocation','patientList','patientDetails'],
    config:{
        refs:{
            ok_login:'#ok_login',
            cancel_login:'#cancel_login',
            ok_loc:'#ok_loc',
            cancel_loc:'#cancel_loc',
            menu_list:'#menu_list',
            up_list:'#up_list',
            down_list:'#down_list',
            logout_list:'#logout_list',
            menu_det:'#menu_det',
            up_det:'#up_det',
            down_det:'#down_det',
            logout_det:'#logout_det',
            back_det:'#back_det',
            menu_add:'#menu_add',
            up_add:'#up_add',
            down_add:'#down_add',
            logout_add:'#logout_add',
            back_add:'#back_add',
            // patientlistid:'#patientlistid'
        },
        control:{
            ok_login:{
                tap:function(){
                    this.doLogin(true)
                }
            },cancel_login:{
                tap:function(){
                    this.doLogin(false)
                }
            },ok_loc:{
                tap:function(){
                    this.doLocation(true)
                }
            },cancel_loc:{
                tap:function(){
                    this.doLocation(false)
                }
            },menu_list:{
                tap:function(){
                    this.doToolbar('list','menu')
                }
            },up_list:{
                tap:function(){
                    this.doToolbar('list','up')
                }
            },down_list:{
                tap:function(){
                    this.doToolbar('list','down')
                }
            },logout_list:{
                tap:function(){
                    this.doExit()
                }
            },menu_det:{
                tap:function(){
                    this.doToolbar('details','menu')
                }
            },up_det:{
                tap:function(){
                    this.doToolbar('details','up')
                }
            },down_det:{
                tap:function(){
                    this.doToolbar('details','down')
                }
            },logout_det:{
                tap:function(){
                    this.doExit()
                }
            },back_det:{
                tap:function(){
                    this.doBack()
                }
            },menu_add:{
                tap:function(){
                    this.doToolbar('add','menu')
                }
            },up_add:{
                tap:function(){
                    this.doToolbar('add','up')
                }
            },down_add:{
                tap:function(){
                    this.doToolbar('add','down')
                }
            },logout_add:{
                tap:function(){
                    this.doExit()
                }
            },back_add:{
                tap:function(){
                    this.doBack()
                }
            }
        }
    },
    launch:function(){
        Ext.create('Ext.Container',{
            id:'viewPort',
            fullscreen:true,
            layout:'card',
            items:[{
                // log into application
                xclass:'mUserStories.view.loginScreen'
            },{
                // daily checkin
                xclass:'mUserStories.view.confirmLocation'
            },{
                // display a list of patients
                xclass:'mUserStories.view.patientList'
            },{
                // display details of patient
                xclass:'mUserStories.view.patientDetails'
            },{
                // display options for adding
                xclass:'mUserStories.view.addOptions'
            }]
        })
    },
    // login to the application
    doLogin:function(arg){
        if(arg){
            // TODO: check login credentials - where do we login?
            // store items
            USER=Ext.getCmp('username').getValue();
            var pass=Ext.getCmp('password').getValue();
            if(USER==''||pass==''){
                Ext.Msg.alert("Error","Please fill in al fields")
            }else{
                // clear form fields
                Ext.getCmp('username').reset();
                Ext.getCmp('password').reset();
                // continue to next page
                Ext.getCmp('viewPort').setActiveItem(PAGES.CONFIRM_LOC)
            }
        }else{
            // exit the program
            this.doExit();
        }
    },
    // allow chw to check in
    doLocation:function(arg){
        if(arg){
            // TODO: generate close locations based on USER
            // TODO: check if location exists
            // TODO: pass LOCATION
            LOCATION=Ext.getCmp('location').getValue();
            if(LOCATION==="otherlocation"){
                Ext.Msg.prompt("","Please enter other location:",function(btn,text){
                    if(btn==='ok'){
                        LOCATION=text;
                    }
                })
            }else if(LOCATION==='empty'){
                Ext.Msg.alert("",'Please fill in the form')
            }
            // TODO: pass CURRDATE
            // TODO: download all data into local storage
            this.doDownload();
            // continue to the next screen
            Ext.getCmp('viewPort').setActiveItem(PAGES.PATIENT_LIST)
        }else{
            // exit the program
            this.doExit();
        }
    },
    doToolbar:function(screen,arg){
        if(arg==='menu'){
            Ext.getCmp('viewPort').setActiveItem(PAGES.ADD)
        }else if(arg==='up'){
            Ext.Msg.confirm('','Upload all information?',function(resp){
                if(resp==='yes'){
                    // TODO: doUpload information in localStorage
                }
            })
        }else if(arg==='down'){
            Ext.Msg.confirm('','Download all information?',function(resp){
                if(resp==='yes'){
                    // TODO: doDownload information in localStorage
                }
            })
        }
    },
    // exit the program
    doExit:function(){
        // TODO: logout credentials
        // return to login screen
        Ext.getCmp('viewPort').setActiveItem(PAGES.LOGIN_SCREEN)
    },
    doBack:function(){
        // TODO: Best logic for returning to previous page:
        // Hard coded in? Create a list of visited pages?
        Ext.getCmp('viewPort').setActiveItem(PAGES.PATIENT_LIST)
    },
    doDownload:function(){
        var down_store=Ext.create('mUserStories.store.downStore');
        down_store.load();
        Ext.getCmp('patientlistid').setStore(down_store);
    },
    doDisclosure:function(record,btn,index){
        Ext.Msg.alert('Tap','Disclose more info for '+record.get('givenName'))
    }
})