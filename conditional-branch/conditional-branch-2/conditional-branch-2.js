function passCheck(result){
  if(result > 90){
    console.log('合格です');
    console.log('おめでとうございます');
  }else if(result > 80){
    console.log('修正して提出してください')
  }else{
    console.log('不合格です');
    console.log('残念でした');
  }
}

function passCheck(result1){
  if (result1 > 80){
    if (result1 > 90){
      console.log('合格です');
      console.log('おめでとうございます');
    }else{
      console.log('修正して再提出してください');
    }
  }else{
    console.log('不合格です');
    console.log('残念でした');
  }
}