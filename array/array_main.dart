
const DEFAULT_CAPACITY = 10;

class CustomArray{
  int length;
  late List<int>array ;
  
  CustomArray(
    {
    this.length = 0,
    }
    
  ) : this.array = List.filled(length, 0);


  push(value){
    array[array.length] = value;
    length++;
  }

  insert(value, index){

    if(index < 0){
      throw "Index is out of bound";
    }
// last item
    if(index == this.length){
      array[index]= value;
      return;
    }

// others
// Array     [1, 2, 3, 4, 5, 6, 0, 0, 0 ,0]
// index =    0  1  2  3  4  5  6  7  8  9
// length = 6

    for(int i = this.length; i > index; i--){
      array[i] = array[i-1];
    }

    array[index]= value;
    length++;

  }

}

void main(){
  final c = CustomArray(length: 10);
  c.insert(1, 0);
  c.insert(2, 1);
  c.insert(3, 2);
  c.insert(4, 3);
  c.insert(5, 4);
  c.push(50);

  print(c.array);
  print(c.array.length);
}