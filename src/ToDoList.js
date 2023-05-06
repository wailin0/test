import {FlatList, SafeAreaView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';


const ToDoList = () => {


    const [value, setValue] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [editingValue, setEditingValue] = useState('');
    const [isEditing, setIsEditing] = useState(null);


    const handleAddValue = () => {
        const textValue = {
            created_at: new Date(),
            status: 'done',
            value: value,
        };
        let copyTodoList = todoList;

        copyTodoList = [...copyTodoList, textValue];
        setTodoList(copyTodoList);
        setEditingValue('');
    };

    const handleDeleteAllValue = () => {
        setTodoList([]);
    };

    const handleEdit = (index) => {
        console.log(editingValue)
        let copyEditValue = [...todoList];
        copyEditValue[index].value = editingValue;
        setTodoList(copyEditValue)
        setIsEditing(null);
    };

    const handleEditingMode = (index) => {
        setIsEditing(index);
    };


    return (
        <SafeAreaView style={{flex: 1, marginHorizontal: 10}}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 20,
            }}>
                <TextInput
                    value={value}
                    onChangeText={text => setValue(text)}
                    style={{
                        height: 40,
                        width: '40%',
                        borderWidth: .5,
                    }}
                />
                <TouchableOpacity
                    onPress={handleAddValue}
                    style={{
                        flex: 1,
                        marginLeft: 10,
                        justifyContent: 'center', alignItems: 'center',
                        width: 50, height: 40,
                        backgroundColor: '#c8bcbc',
                    }}>
                    <Text>
                        Add
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleDeleteAllValue}
                    style={{
                        justifyContent: 'center', alignItems: 'center',
                        width: 140, height: 40,
                        marginLeft: 30,
                        backgroundColor: '#c8bcbc',
                    }}>
                    <Text>
                        Delete All Done
                    </Text>
                </TouchableOpacity>
            </View>


            <View style={{
                marginVertical: 20,
                borderBottomWidth: 1,
                borderBottomColor: '#c8bcbc',
            }}>
                <Text>
                    To Do
                </Text>
            </View>

            <View style={{
                flex: 1,
            }}>
                <FlatList data={todoList}
                          renderItem={({item, index}) =>
                              <View style={{
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                  marginBottom: 20,
                              }}>
                                  <Text>
                                      {index + 1}.
                                  </Text>

                                  {isEditing===index
                                      ?
                                      <TextInput
                                          value={editingValue}
                                          onChangeText={text => setEditingValue(text)}
                                          style={{
                                              height: 40,
                                              width: '40%',
                                              borderWidth: .5,
                                          }}
                                      />
                                      :
                                      <TouchableOpacity
                                          onPress={() => handleEditingMode(index)}
                                      >
                                          <Text>
                                              {item.value}
                                          </Text>
                                      </TouchableOpacity>

                                  }

                                      <TouchableOpacity
                                          onPress={() => handleEdit(index)}
                                          style={{
                                              marginLeft: 10,
                                              justifyContent: 'center', alignItems: 'center',
                                              width: 50, height: 40,
                                              backgroundColor: '#c8bcbc',
                                          }}>
                                          <Text>
                                              {isEditing===index ? "Save" : "Done"}
                                          </Text>
                                      </TouchableOpacity>


                              </View>
                          }

                />
            </View>
        </SafeAreaView>
    );
};

export default ToDoList;
