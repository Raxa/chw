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
Ext.define('mUserStories.view.notificationInbox',{
    extend:'Ext.tab.Panel',
    config:{
        height:'100%',
        ui:'neutral',
        items:[{
            xtype:'titlebar',
            docked:'top',
            title:'Notifications'
        },{
            xtype:'toolbar',
            docked:'bottom',
            defaults:{
                iconMask:true,
                ui:'plain'
            },
            layout:{
            pack:'center',
                align:'center'
            },
            items:[{
                iconCls:'add',
                id:'menu_list'
            },{
                iconCls:'action',
                id:'inbox_list'
            },{
                iconCls:'arrow_up',
                id:'up_list'
            },{
                iconCls:'arrow_down',
                id:'down_list'
            },{
                iconCls:'delete',
                id:'logout_list'
            }]
        },{
            title:'Unread',
            cls:'demo-list',
            items:[{
                xtype:'list',
                ui:'round',
                grouped:true,
                pinHeaders:false,
                id:'inbox_unread',
                width:Ext.os.deviceType=='Phone'?null:'80%',
                height:Ext.os.deviceType=='Phone'?null:'100%',
                centered:true,
                itemTpl:[],
                onItemDisclosure:function(record,btn,index){}   
            }]
        },{
            title:'All',
            cls:'demo-list',
            items:[{
                xtype:'list',
                ui:'round',
                grouped:true,
                pinHeaders:false,
                id:'inbox_all',
                width:Ext.os.deviceType=='Phone'?null:'80%',
                height:Ext.os.deviceType=='Phone'?null:'100%',
                centered:true,
                itemTpl:[],
                onItemDisclosure:function(record,btn,index){}
            }]
        }]
    }
})