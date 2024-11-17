import { Text, View, TextInput, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "@/assets/style.js";
import useTodo from "@/hooks/utils/useTodo";

export default function Index() {
  const { text, setText, addTodo, todoItems } = useTodo();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add New Todo"
          placeholderTextColor="gray"
          value={text}
          onChangeText={setText}
        />
        <Pressable onPress={addTodo} style={styles.addButton}>
          <Text style={styles.addButtonText}>Add</Text>
        </Pressable>
      </View>
      {todoItems}
    </SafeAreaView>
  );
}
