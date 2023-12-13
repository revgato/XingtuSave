import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const ShowPlan = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.showplan}>
      <View style={[styles.header, styles.headerPosition]}>
        <Text
          style={styles.headername}
        >{`Kế hoạch chi tiêu trong tháng `}</Text>
      </View>
      <View style={styles.expectedExpenses}>
        <View style={styles.title}>
          <Text
            style={styles.allMyExpenses}
          >{`Chi tiêu dự kiến của bạn trong tháng này `}</Text>
        </View>
      </View>
      <Image
        style={[styles.additemIcon, styles.cariconLayout]}
        resizeMode="cover"
        source={require("../assets/additem.png")}
      />
      <View style={styles.moneycalulate}>
        <View style={styles.income}>
          <Text style={styles.incometext}>20.000.000 đ</Text>
          <Text
            style={[styles.income1, styles.income1Typo]}
          >{`Thu nhập `}</Text>
        </View>
        <View style={styles.spending}>
          <Text style={styles.expensetext}>15.000.0000 đ</Text>
          <Text
            style={[styles.expense, styles.income1Typo]}
          >{`Chi tiêu `}</Text>
        </View>
      </View>
      <View style={[styles.listPlan, styles.headerPosition]}>
        <Pressable
          style={styles.planitem}
          onPress={() => navigation.navigate("DetailPlan")}
        >
          <View style={styles.rectangleShadowBox1} />
          <View style={[styles.info, styles.infoPosition]}>
            <Text
              style={[styles.category, styles.categoryTypo]}
            >{`Thực phẩm `}</Text>
            <Text style={[styles.value, styles.valueTypo]}>2.000.000 đ</Text>
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/icon.png")}
            />
          </View>
          <Image
            style={[styles.icon1, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/icon1.png")}
          />
        </Pressable>
        <View style={styles.planitem1}>
          <View style={styles.rectangleShadowBox1} />
          <View style={[styles.info, styles.infoPosition]}>
            <Text
              style={[styles.category1, styles.categoryTypo]}
            >{`Phí đi lại `}</Text>
            <Text style={[styles.value1, styles.valuePosition]}>300.000 đ</Text>
            <Image
              style={[styles.icon2, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/icon.png")}
            />
          </View>
          <Image
            style={[styles.caricon, styles.cariconLayout]}
            resizeMode="cover"
            source={require("../assets/vuesaxlinearcar.png")}
          />
        </View>
        <View style={styles.planitem2}>
          <View style={styles.rectangleShadowBox1} />
          <View style={[styles.icon3, styles.iconPosition]}>
            <View style={styles.rectangle4} />
            <Image
              style={styles.icon4}
              resizeMode="cover"
              source={require("../assets/icon2.png")}
            />
          </View>
          <View style={[styles.info2, styles.infoPosition]}>
            <Text
              style={[styles.category2, styles.categoryTypo]}
            >{`Sức khỏe `}</Text>
            <Text style={[styles.value2, styles.valuePosition]}>500.000 đ</Text>
            <Image
              style={[styles.icon2, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/icon.png")}
            />
          </View>
        </View>
        <View style={[styles.planitem3, styles.planIconPosition]}>
          <View style={styles.rectangleShadowBox} />
          <View style={[styles.info, styles.infoPosition]}>
            <Text
              style={[styles.category2, styles.categoryTypo]}
            >{`Đầu tư chứng khoán `}</Text>
            <Text style={[styles.value3, styles.valueTypo]}>100.000 đ</Text>
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/icon.png")}
            />
          </View>
          <Image
            style={styles.icon7}
            resizeMode="cover"
            source={require("../assets/icon3.png")}
          />
        </View>
        <View style={[styles.planitem4, styles.planitem4Position]}>
          <View style={styles.rectangleShadowBox} />
          <Image
            style={[styles.icon3, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/icon4.png")}
          />
          <View style={[styles.info2, styles.infoPosition]}>
            <Text
              style={[styles.category, styles.categoryTypo]}
            >{`Tiền nhà `}</Text>
            <Text style={[styles.value4, styles.valueTypo]}>4.500.000 đ</Text>
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/icon.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerPosition: {
    width: 386,
    left: 14,
    position: "absolute",
  },
  cariconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  iconLayout2: {
    width: 35,
    position: "absolute",
    overflow: "hidden",
  },
  planIconPosition: {
    zIndex: 3,
    position: "absolute",
  },
  planitem4Position: {
    zIndex: 4,
    position: "absolute",
  },
  iconLayout1: {
    width: "8.04%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  income1Typo: {
    color: Color.colorLightslategray,
    fontSize: FontSize.size_xs,
    marginTop: 7,
    fontFamily: FontFamily.aBeeZeeRegular,
    textAlign: "center",
    letterSpacing: 1,
    top: "50%",
    position: "absolute",
  },
  infoPosition: {
    height: 36,
    width: 298,
    left: 74,
    top: 17,
    position: "absolute",
    overflow: "hidden",
  },
  categoryTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    left: "0%",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.abelRegular,
    letterSpacing: 1,
    top: "50%",
    position: "absolute",
  },
  valueTypo: {
    color: Color.colorMediumseagreen,
    textAlign: "right",
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.abelRegular,
    letterSpacing: 1,
    top: "50%",
    position: "absolute",
  },
  iconLayout: {
    left: "92.95%",
    right: "0%",
    width: "7.05%",
    height: "55.56%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    height: 46,
    width: 46,
    top: 14,
    left: 14,
    position: "absolute",
  },
  valuePosition: {
    marginTop: -11,
    color: Color.colorMediumseagreen,
    textAlign: "right",
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.abelRegular,
    letterSpacing: 1,
    top: "50%",
    position: "absolute",
  },
  headername: {
    marginTop: -9,
    left: "22.67%",
    textAlign: "center",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.abelRegular,
    letterSpacing: 1,
    fontSize: FontSize.size_base,
    top: "50%",
    position: "absolute",
  },
  header: {
    top: 20,
    height: 40,
    overflow: "hidden",
  },
  allMyExpenses: {
    marginTop: -9.5,
    textAlign: "left",
    left: "0%",
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.abelRegular,
    letterSpacing: 1,
    fontSize: FontSize.size_base,
    top: "50%",
    position: "absolute",
  },
  title: {
    left: 0,
    top: 0,
    height: 19,
    width: 386,
    position: "absolute",
    overflow: "hidden",
  },
  expectedExpenses: {
    top: 152,
    left: 15,
    height: 19,
    width: 386,
    position: "absolute",
  },
  additemIcon: {
    top: 193,
    left: 368,
  },
  incometext: {
    width: 171,
    fontFamily: FontFamily.aBeeZeeRegular,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    left: 0,
    top: 0,
    color: Color.colorDarkslategray,
    letterSpacing: 1,
    position: "absolute",
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
    fontFamily: FontFamily.aBeeZeeRegular,
    fontSize: FontSize.size_lg,
    color: Color.colorDarkslategray,
    letterSpacing: 1,
    top: "50%",
    position: "absolute",
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
    zIndex: 1,
    position: "absolute",
    overflow: "hidden",
  },
  moneycalulate: {
    top: 75,
    left: 4,
    width: 396,
    padding: Padding.p_3xs,
    position: "absolute",
  },
  rectangleShadowBox1: {
    height: 74,
    shadowColor: "rgba(0, 0, 0, 0.04)",
    borderRadius: Border.br_5xs,
    zIndex: 0,
    shadowOpacity: 1,
    elevation: 48,
    shadowRadius: 48,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: Color.colorWhite,
    width: 386,
  },
  category: {
    marginTop: -10,
  },
  value: {
    left: "54.03%",
    marginTop: -10,
  },
  icon: {
    top: "33.33%",
    bottom: "11.11%",
  },
  info: {
    zIndex: 1,
  },
  icon1: {
    zIndex: 2,
  },
  planitem: {
    zIndex: 0,
  },
  category1: {
    marginTop: -14,
  },
  value1: {
    left: "53.36%",
  },
  icon2: {
    top: "22.22%",
    bottom: "22.22%",
  },
  caricon: {
    top: 22,
    left: 29,
    zIndex: 2,
  },
  planitem1: {
    marginTop: 129,
    zIndex: 1,
  },
  rectangle4: {
    backgroundColor: "#f7f7f7",
    borderRadius: Border.br_7xs,
    height: 46,
    width: 46,
    left: 0,
    top: 0,
    position: "absolute",
  },
  icon4: {
    left: 13,
    width: 20,
    height: 18,
    top: 14,
    position: "absolute",
  },
  icon3: {
    zIndex: 1,
  },
  category2: {
    marginTop: -8,
  },
  value2: {
    left: "54.36%",
  },
  info2: {
    zIndex: 2,
  },
  planitem2: {
    marginTop: 129,
    zIndex: 2,
  },
  rectangleShadowBox: {
    shadowColor: "rgba(0, 0, 0, 0.06)",
    borderRadius: Border.br_7xs,
    height: 74,
    zIndex: 0,
    shadowOpacity: 1,
    elevation: 48,
    shadowRadius: 48,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: Color.colorWhite,
    width: 386,
  },
  value3: {
    marginTop: -7,
    left: "55.37%",
  },
  icon7: {
    top: 25,
    left: 27,
    width: 13,
    height: 22,
    zIndex: 2,
    position: "absolute",
  },
  planitem3: {
    top: 101,
    left: 0,
  },
  value4: {
    left: "55.7%",
    marginTop: -10,
  },
  planitem4: {
    top: 305,
    left: 0,
  },
  listPlan: {
    top: 242,
    height: 496,
  },
  showplan: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.colorGray,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default ShowPlan;
