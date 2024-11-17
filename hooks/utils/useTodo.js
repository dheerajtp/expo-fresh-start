import { useState } from "react";
import { data } from "@/data/todos";
import { FlatList, Pressable, View, Text } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import styles from "@/assets/style.js";

const useTodo = () => {
  const [todo, setTodo] = useState(data.sort((a, b) => b.id - a.id));
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim()) {
      const id = todo.length > 0 ? todo[0].id + 1 : 1;
      setTodo([{ id, title: text, completed: false }, ...todo]);
      setText("");
    }
  };

  const toggleCompleteStatus = (id) => {
    setTodo(
      todo.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const removeTodo = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.todoItem}>
      <Text
        style={[styles.todoText, item.completed && styles.completedText]}
        onPress={() => toggleCompleteStatus(item.id)}
      >
        {item.title}
      </Text>
      <Pressable
        onPress={() => {
          removeTodo(item.id);
        }}
      >
        <MaterialCommunityIcons name="delete-circle" size={36} color="red" />
      </Pressable>
    </View>
  );

  const todoItems = (
    <FlatList
      data={todo}
      renderItem={renderItem}
      keyExtractor={(item, index) => item.id?.toString() || index.toString()}
      contentContainerStyle={{ flexGrow: 1 }}
    />
  );
  return {
    todo,
    text,
    addTodo,
    toggleCompleteStatus,
    removeTodo,
    setText,
    todoItems,
  };
};

export default useTodo;
