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
Ext.define('mUserStories.view.addOptions',{
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
                id:'back_add'
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
                id:'menu_add'
            },{
                iconCls:'arrow_up',
                id:'up_add'
            },{
                iconCls:'arrow_down',
                id:'down_add'
            },{
                iconCls:'delete',
                id:'logout_add'
            }]
        },{
            xtype:'formpanel',
            title:'Register',
            items:[{
                xtype:'fieldset',
                defaults:{
                    labelWidth:'35%'
                },
                items:[{
                    xtype:'textfield',
                    label:'ID',
                    name:'id_reg',
                    placeHolder:'314',
                    required:true,
                    clearIcon:true
                },{
                    xtype:'textfield',
                    label:'First',
                    name:'first_reg',
                    placeHolder:'Harry',
                    required:true,
                    clearIcon:true
                },{
                    xtype:'textfield',
                    label:'Last',
                    name:'last_reg',
                    placeHolder:'Potter',
                    required:true,
                    clearIcon:true
                },{
                    xtype:'textfield',
                    label:'Phone',
                    name:'phone_reg',
                    placeHolder:'1234567890',
                    required:true,
                    clearIcon:true
                },{
                    xtype : 'container',
                    layout : {
                        type : 'hbox',
                        align: 'stretch',
                        padding : 0
                    },
                    items : [{
                        xtype: 'radiofield',
                        name: 'radiogroup',
                        value: 'female',
                        label: 'Female',
                        labelWidth : '70%',
                        flex : 1,
                        height : 50
                    },{
                        xtype : 'radiofield',
                        name : 'radiogroup',
                        value : 'male',
                        label : 'Male',
                        labelWidth : '70%',
                        flex : 1
                    }]
                },{
                    xtype: 'datepickerfield',
                    destroyPickerOnHide: true,
                    name: 'bday',
                    label: 'Birthday',
                    required: true,
                    value: new Date(),
                    picker: {
                        yearFrom: 1900
                    }
                },{
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        pack: 'center',
                        align: 'middle'
                    },
                    items: [{
                        xtype: 'container',
                        layout: 'hbox',
                        padding: '10px',
                        width: "100%",
                        items: [{
                            xtype: 'label',
                            flex: '3'
                        },{
                            xtype: 'button',
                            text: 'Okay',
                            id: 'ok_reg',
                            flex: '3',
                            ui:'confirm-round'
                        },{
                            xtype: 'label',
                            flex: '1'
                        },{
                            xtype: 'button',
                            text: 'Cancel',
                            id: 'cancel_reg',
                            flex: '3',
                            ui:'decline-round'
                        },{
                            xtype: 'label',
                            flex: '3'
                        }]
                    }]
                }]
            }]
        },{
            xtype:'formpanel',
            title:'Reminder',
            items:[{
                xtype:'fieldset',
                defaults:{
                    labelWidth:'35%'
                },
                items:[{
                    xtype:'textfield',
                    label:'ID',
                    name:'id_rem',
                    placeholder:'314',
                    clearIcon:true,
                    required:true
                },{
                    xtype:'textfield',
                    label:'First',
                    name:'first_rem',
                    placeholder:'Harry',
                    clearIcon:true,
                    required:true
                },{
                    xtype:'textfield',
                    label:'Last',
                    name:'last_rem',
                    placeholder:'Last',
                    clearIcon:true,
                    required:true
                },{
                    xtype:'selectfield',
                    label:'Type',
                    id:'type_rem',
                    flex:2,
                    required:true,
                    options:[{
                        text:'',
                        value:'empty'
                    },{
                        text:'Reminder #1',
                        value:'reminder1'
                    },{
                        text:'Reminder #2',
                        value:'reminder2'
                    },{
                        text:'Reminder #3',
                        value:'reminder3'
                    },{
                        text:'Other',
                        value:'otherreminder'
                    }]
                },{
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        pack: 'center',
                        align: 'middle'
                    },
                    items: [{
                        xtype: 'container',
                        layout: 'hbox',
                        padding: '10px',
                        width: "100%",
                        items: [{
                            xtype: 'label',
                            flex: '3'
                        },{
                            xtype: 'button',
                            text: 'Okay',
                            id: 'ok_rem',
                            flex: '3',
                            ui:'confirm-round'
                        },{
                            xtype: 'label',
                            flex: '1'
                        },{
                            xtype: 'button',
                            text: 'Cancel',
                            id: 'cancel_rem',
                            flex: '3',
                            ui:'decline-round'
                        },{
                            xtype: 'label',
                            flex: '3'
                        }]
                    }]
                }]
            }]
        }]
    }
})