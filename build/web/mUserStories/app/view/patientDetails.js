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
Ext.define('mUserStories.view.patientDetails',{
    extend:'Ext.tab.Panel',
    config:{
        height:'100%',
        ui:'neutral',
        items:[{
            xtype:'titlebar',
            docked:'top',
            title:'Mobile User Stories',
            items:[{
                xtype:'button',
                ui:'back',
                text:'Back',
                id:'back_det'
            }]
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
                id:'menu_det'
            },{
                iconCls:'arrow_up',
                id:'up_det'
            },{
                iconCls:'arrow_down',
                id:'down_det'
            },{
                iconCls:'delete',
                id:'logout_det'
            }]
        },{
            xtype:'formpanel',
            title:'Basic',
            items:[{
                xtype:'fieldset',
                title:'Basic Information',
                defaults:{
                    labelWidth:'35%',
                    disabled:true
                },
                items:[{
                    xtype:'textfield',
                    label:'First',
                    id:'first_det'
                },{
                    xtype:'textfield',
                    label:'Last',
                    id:'last_det'
                },{
                    xtype:'textfield',
                    label:'Phone',
                    id:'phone_det'
                },{
                    xtype:'textfield',
                    label:'Address',
                    id:'address_det'
                },{
                    xtype:'textfield',
                    label:'Gender',
                    id:'gender_det'
                },{
                    xtype:'textfield',
                    label:'Birthday',
                    id:'bday_det'
                }]
            }]
        },{
            xtype:'formpanel',
            title:'Immunization',
            items:[{
                xtype:'fieldset',
                title:'Immunization Records',
                defaults:{
                    labelWidth:'35%',
                    disabled:true
                },
                items:[{
                    xtype:'textfield',
                    label:'First',
                    id:'first_im'
                },{
                    xtype:'textfield',
                    label:'Last',
                    id:'last_im'
                },{
                    xtype:'textfield',
                    label:'Immunizations',
                    id:'info_im'
                }]
            }]
        }]
    }
})