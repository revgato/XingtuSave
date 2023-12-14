import React, { useCallback, useEffect, useState } from 'react';
import {
    Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { ToDoItemComponent } from '../components/ToDoItem';
import { ToDoItem } from '../models/ToDoItem';
import { getDBConnection, getTodoItems, saveTodoItems, createTable, deleteTodoItem } from '../controllers/db-service';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { Border, Color, FontFamily, FontSize, Padding } from '../GlobalStyles';

type ProfileProps = NativeStackScreenProps<RootStackParamList>;

const ShowPlan = ({ navigation }: ProfileProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [todos, setTodos] = useState<ToDoItem[]>([]);

  const loadDataCallback = useCallback(async () => {
    try {
      const initPlans = [{id:0, value: 'No Plans'}];
      const db = await getDBConnection();
      await createTable(db);
      const storedPlanItems = await getTodoItems(db);
      if (storedPlanItems.length) {
        setTodos(storedPlanItems);
      } else {
        await saveTodoItems(db, initPlans);
        setTodos(initPlans);
      }
    } catch (error) {
      console.error(error);
    }
  }, [todos.length]);

  useEffect( () => {
    loadDataCallback();
  }, [loadDataCallback]);

  const deleteItem = async (id: number) => {
    try {
      const db = await getDBConnection();
      await deleteTodoItem(db, id);
      todos.splice(id, 1);
      setTodos(todos.slice(0));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.appTitleView}>
        <Text style={styles.appTitleText}>Kế hoạch chi tiêu trong tháng</Text>
      </View>
      <View style={[styles.expectedExpenses, styles.titleLayout]}>
        <View style={[styles.title, styles.titlePosition]}>
          <Text
            style={styles.allMyExpenses}
          >{`Chi tiêu dự kiến của bạn trong tháng này `}</Text>
        </View>
      </View>
      <View style={styles.moneycalulate}>
        <View style={styles.income}>
          <Text style={[styles.incometext, styles.incometextTypo]}>
            20.000.000 đ
          </Text>
          <Text
            style={[styles.income1, styles.income1Typo]}
          >{`Thu nhập `}</Text>
        </View>
        <View style={[styles.spending, styles.spendingPosition]}>
          <Text style={[styles.expensetext, styles.incometextTypo]}>
            15.000.0000 đ
          </Text>
          <Text
            style={[styles.expense, styles.income1Typo]}
          >{`Chi tiêu `}</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate("NewPlan")}>
          <Image
            style={styles.addButtonIcon}
            resizeMode="cover"
            source={require("../assets/additem.png")}
          />
        </TouchableOpacity>
  
        <View>
          {todos.map((todo) => (
            <ToDoItemComponent key={todo.id} todo={todo} deleteItem={deleteItem} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
          }
  const styles = StyleSheet.create({
    container: {
      height:'100%',
      backgroundColor: '#fff',
    },
    appTitleView: {
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
    },
    appTitleText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    addButton: {
      position: 'absolute',
      top: '20%',
      right: 20,
      padding: 10,
    },
    addButtonIcon: {
      height: 24,
      width: 24,
    },
    scrollViewContent: {
      flexGrow: 1,
      justifyContent: 'center',
    },
    titleLayout: {
      height: 19,
      width: 386,
      position: "absolute",
    },
    titlePosition: {
      left: 0,
      top: 0,
    },
    rectanglePosition: {
      borderTopRightRadius: Border.br_sm,
      borderTopLeftRadius: Border.br_sm,
    },
    spendingPosition: {
      zIndex: 1,
      position: "absolute",
      overflow: "hidden",
    },
    iconLayout: {
      width: "8.04%",
      maxHeight: "100%",
      maxWidth: "100%",
      position: "absolute",
      overflow: "hidden",
    },
    incometextTypo: {
      fontFamily: FontFamily.aBeeZeeRegular,
      fontSize: FontSize.size_lg,
      color: Color.colorDarkslategray,
      letterSpacing: 1,
      position: "absolute",
    },
    income1Typo: {
      textAlign: "center",
      color: Color.colorLightslategray,
      fontSize: FontSize.size_xs,
      marginTop: 7,
      fontFamily: FontFamily.aBeeZeeRegular,
      letterSpacing: 1,
      top: "50%",
      position: "absolute",
    },
    allMyExpenses: {
      marginTop: -9,
      left: "0%",
      fontSize: FontSize.size_base,
      fontFamily: FontFamily.abelRegular,
      textAlign: "left",
      color: Color.colorDarkslategray,
      letterSpacing: 1,
      top: "40%",
      position: "absolute",
    },
    title: {
      height: 19,
      width: 386,
      position: "absolute",
      overflow: "hidden",
    },
    expectedExpenses: {
      top: 152,
      left: 15,
    },
    additemIcon: {
      top: 193,
      left: 368,
      width: 24,
      height: 24,
      position: "absolute",
    },
    incometext: {
      width: 171,
      textAlign: "left",
      left: 0,
      top: 0,
    },
    income1: {
      width: "55.99%",
      left: "22.04%",
    },
    income: {
      width: 137,
      height: 42,
      zIndex: 0,
    },
    expensetext: {
      marginTop: -21,
      width: "121.27%",
      left: "-21.27%",
      textAlign: "right",
      top: "50%",
      fontFamily: FontFamily.aBeeZeeRegular,
      fontSize: FontSize.size_lg,
    },
    expense: {
      width: "45.14%",
      left: "35.42%",
    },
    spending: {
      right: 0,
      bottom: 11,
      width: 142,
      height: 42,
    },
    moneycalulate: {
      top: 75,
      left: 4,
      width: 396,
      padding: Padding.p_3xs,
      position: "absolute",
    },
  });
  
  
export default ShowPlan;