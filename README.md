# Queue
"Слишком длинные очереди" Яндекс.Контест

В столовой Яндекса начали образовываться слишком длинные очереди. Каждый новый сотрудник вставая в очередь (и, естественно, ужасаясь количеством людей перед ним), получает некоторый уровень недовольства, определяемый натуральным числом. Уровень недовольства не меняется во время ожидания в очереди.

Руководство собирает статистику и хочет знать о минимальном и максимальном недовольстве в очереди в определенные моменты времени.

Вам предстоит реализовать такую очередь и обработать некоторое количество запросов.

Запросы бывают вида:

push(x) — добавить яндексоида с уровнем недовольства x в конец очереди
shift() — обслужить первого в очереди яндексоида и вернуть его уровень недовольства
min() — вернуть минимальное недовольство в очереди
max() — вернуть максимальное недовольство в очереди
В случае пустой очереди минимальное и максимальное недовольство, а также возвращаемое из shift значение, равны нулю.

Файл с ответом должен экспортировать объект у которого обязательно будут присутствовать функции push(), shift(), min(), max().

Шаблон
module.exports = {
  push(x) {
    // Напишите реализацию метода push.
    // Добавляет элемент в очередь.
  },
  shift () {
    // Напишите реализацию метода shift.
    // Возвращает недовольство первого и удаляет его из очереди.
    return 0
  },
  min() {
    // Напишите реализацию метода min.
    // Возвращает минимальное недовольство в очереди.
    return 0
  },
  max() {
    // Напишите реализацию метода max.
    // Возвращает максимальное недовольство в очереди.
    return 0
  }
}
