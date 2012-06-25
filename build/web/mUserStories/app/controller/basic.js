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
            cancel_loc:'#cancel_loc',
            cancel_login:'#cancel_login',
            cancel_reg:'#cancel_reg',
            cancel_rem:'#cancel_rem',
            back_add:'#back_add',
            back_det:'#back_det',
            down_add:'#down_add',
            down_det:'#down_det',
            down_list:'#down_list',
            logout_add:'#logout_add',
            logout_det:'#logout_det',
            logout_list:'#logout_list',
            menu_add:'#menu_add',
            menu_det:'#menu_det',
            menu_list:'#menu_list',
            ok_loc:'#ok_loc',
            ok_login:'#ok_login',
            ok_reg:"#ok_reg",
            ok_rem:'#ok_rem',
            up_add:'#up_add',
            up_det:'#up_det',
            up_list:'#up_list'
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
            },ok_reg:{
                tap:function(){
                    this.doAdd('register',true)
                }
            },cancel_reg:{
                tap:function(){
                    this.doAdd('register',false)
                }
            },ok_rem:{
                tap:function(){
                    this.doAdd('reminder',true)
                }
            },cancel_rem:{
                tap:function(){
                    this.doAdd('reminder',false)
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
/* STARTUP FUNCTIONS */
    // login to the application
    doLogin:function(arg){
        if(arg){
            // TODO: check login credentials - where do we login?
            // chw accounts on OpenMRS?
            // store items
            USER=Ext.getCmp('username').getValue();
            var pass=Ext.getCmp('password').getValue();
            if(USER===''||pass===''){
                Ext.Msg.alert("Error","Please fill in al fields")
            }else{
                Ext.getCmp('welcome_label').setHtml("Welcome, "+USER+"<br>"+"This is your check in for "+CURR_DATE)
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
/* SCREEN FUNCTIONS */
    // add registrations and reminders
    // TODO: should we add more functionality? ex. place order for sample
    doAdd:function(step,arg){
        if(arg){
            if(step==='register'){
                // TODO: validate all fields
            }else if(step==='reminder'){
                // TODO: validate all fields
                // TODO: add 'other' option
            }
        }else{
            // TODO: doReturn()
            Ext.getCmp('viewPort').setActiveItem(PAGES.PATIENT_LIST)
        }
    },// deal with backbutton
    doBack:function(){
        // TODO: Best logic for returning to previous page - doReturn()
        // Hard coded in? Create a list of visited pages?
        Ext.getCmp('viewPort').setActiveItem(PAGES.PATIENT_LIST)
    },// exit the program
    doExit:function(){
        // TODO: make sure all information is uploaded
        // TODO: delete/save necessary information
        Ext.getCmp('location').reset();
        // return to login screen
        Ext.getCmp('viewPort').setActiveItem(PAGES.LOGIN_SCREEN)
    },
    // allow chw to check in
    doLocation:function(arg){
        if(arg){
            // TODO: generate close locations based on USER
            LOCATION=Ext.getCmp('location').getValue();
            if (LOCATION==='empty'){
                Ext.Msg.alert("",'Please fill in the form')
            }else{
                if(LOCATION==="otherlocation"){
                    Ext.Msg.prompt("","Please enter other location:",function(btn,text){
                        if(btn==='ok'){
                            LOCATION=text;
                        }
                    })
                }
                // TODO: pass LOCATION to manager
                // TODO: pass CURRDATE to manager
                // download all data into local storage
                this.doDownload();
                // continue to the next screen
                Ext.getCmp('viewPort').setActiveItem(PAGES.PATIENT_LIST)
            }
            
        }else{
            // exit the program
            this.doExit();
        }
    },
    // manage navigation based on lower toolbar
    doToolbar:function(screen,arg){
        if(arg==='menu'){
            Ext.getCmp('viewPort').setActiveItem(PAGES.ADD)
        }else if(arg==='up'){
            Ext.Msg.confirm('','Upload all information?',function(resp){
                if(resp==='yes'){
                    // TODO: doUpload information in localStorage
                    this.doUpload();
                }
            })
        }else if(arg==='down'){
            Ext.Msg.confirm('','Download all information?',function(resp){
                if(resp==='yes'){
                    // TODO: check for conflicts
                    // doDownload information in localStorage
                    this.doDownload();
                }
            })
        }
    },
 /* HELPER FUNCTIONS */   
    doDownload:function(){
        var down_store=Ext.create('mUserStories.store.downStore');
        down_store.load();
        Ext.getCmp('patientlistid').setStore(down_store);
    },
    doUpload:function(){
        
    }
})