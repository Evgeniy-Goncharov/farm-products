import eat from './../assets/icons/eat.svg';
import garbage from './../assets/icons/garbage.svg';
import sprout from './../assets/icons/sprout.svg';
import noMeat from './../assets/icons/no-meat.svg';

const featuresList = [
    {
      id: 0,
      title: 'Еда намного вкуснее',
      content: 'Из-за большого количество товара сотрудники магазинов не успевают своевременно производить замену товара',
      image: eat,
      owner: 'Фермерские продукты',
      isNegative: false
    },
    {
      id: 1,
      title: 'Просроченные продукты',
      content: 'Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники',
      image: garbage,
      owner: 'Магазинные продукты',
      isNegative: true
    },
    {
      id: 2,
      title: 'Натуральные продукты',
      content: 'Поставляем местные органические продукты выращенные без пестицидов и химических удобрений.',
      image: sprout,
      owner: 'Фермерские продукты',
      isNegative: false
    },
    {
      id: 3,
      title: 'Некачественное мясо',
      content: 'Мясные полуфабрикаты, в которых содержится чрезмерно много натрия, вредных жиров, консервантов',
      image: noMeat,
      owner: 'Магазинные продукты',
      isNegative: true
    }
  ];
  
  export default featuresList;