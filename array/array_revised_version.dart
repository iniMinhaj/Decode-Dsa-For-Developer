const DEFAULT_CAPACITY = 10;

class CustomArray {
  int length;
  late List<int?> array;

  CustomArray({this.length = 0}) {
    if (length > DEFAULT_CAPACITY) {
      throw Exception('Length exceeds max capacity of $DEFAULT_CAPACITY');
    }
    array = List<int?>.filled(DEFAULT_CAPACITY, null);
  }

  void insert(int value, int index) {
    if (index < 0 || index > length || length >= DEFAULT_CAPACITY) {
      throw Exception('Index out of bound or array is full');
    }

    for (int i = length; i > index; i--) {
      array[i] = array[i - 1];
    }

    array[index] = value;
    length++;
  }

  @override
  String toString() {
    return array.sublist(0, length).toString();
  }
}

void main() {
  final c = CustomArray(length: 5);

  c.insert(1, 0);
  c.insert(2, 1);
  c.insert(3, 2);
  c.insert(4, 3);
  c.insert(5, 4);

  print(c); // Output: [5, 1, 3, 2, 4]
  print(c.length); // Output: [5, 1, 3, 2, 4]
}
