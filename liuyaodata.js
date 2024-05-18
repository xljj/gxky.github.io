//���Ժ�64������
/////////////////////////
//���ݴӵ͵�������س 0��1 ������������
function SanYaoToBaGuaIndex(y0, y1, y2)
{
    var ix = Number(y0) * 1 + Number(y1) * 2 +  Number(y2) * 4;
    return ix;
}

//�����ŷ������ϵ��£���λ����λ
var BaGua = [
  "��", //000
  "��", //001 ��
  "��", //010 ��
  "��", //011
  "��", //100 ��
  "��", //101
  "��", //110
  "Ǭ"  //111 ��
];
//������Ų�����
var BaGuaChaShuZi = [
  8,//����
  4,//���� ��
  6,//���� ��
  2,//�Ҷ�
  7,//���� ��
  3,//����
  5,//����
  1 //Ǭһ ��
];

//���ֲ�������
var ShuZiChaBaGua = [
    0, //0����8������
    7, //1��Ǭ��111
    3, //2�Ƕң�011
    5, //3���룬101
    1, //4����001
    6, //5���㣬110
    2, //6�ǿ���010
    4, //7���ޣ�100
    0  //8������000
];

//�������� ľ0 ��1 ��2 ��3 ˮ4
//�Թ�������
var BaGuaWuXing = [
  2,//��Ϊ�أ���
  0,//��Ϊ�ף�ľ
  4,//��Ϊˮ��ˮ
  3,//��Ϊ�󣬽�
  2,//��Ϊɽ����
  1,//��Ϊ�𣬻�
  0,//��Ϊ�磬ľ
  3 //ǬΪ�죬��
];

//�����ɼ�װ��ɣ�����������װ���
//��0  ��1  ��2  ��3  ��4
//��5  ��6  ��7  ��8  ��9
var NaJiaTianGan = [
    [1,1,1,  9,9,9], //��000 ���ң����
    [6,6,6,  6,6,6], //��001 ��
    [4,4,4,  4,4,4], //��010 ��
    [3,3,3,  3,3,3], //��011 ��
    [2,2,2,  2,2,2], //��100 ��
    [5,5,5,  5,5,5], //��101 ��
    [7,7,7,  7,7,7], //��110 ��
    [0,0,0,  8,8,8]  //Ǭ111 �ڼף�����
];

//�����ɼ�װ��֧������������װ��֧
//��0  ��1  ��2  î3  ��4  ��5
//��6  δ7  ��8  ��9  ��10  ��11
var NaJiaDiZhi = [
    [7,5,3,   1,11,9], //��000
  [0,2,4,  6,8,10], //��001
  [2,4,6,  8,10,0], //��010
    [5,3,1,   11,9,7], //��011
  [4,6,8,  10,0,2], //��100
    [3,1,11,  9,7,5], //��101
    [1,11,9,  7,5,3], //��110
  [0,2,4,  6,8,10]  //Ǭ111
];

//��֧�ٲ�����
//�������� ľ0 ��1 ��2 ��3 ˮ4
var DiZhiChaWuXing = [
    4,//��ˮ
    2,//����
    0,//��ľ
    0,//îľ
    2,//����
    1,//�Ȼ�
    1,//���
    2,//δ��
    3,//���
    3,//�Ͻ�
    2,//����
    4 //��ˮ
];

//�������飬��������Ϊ�ң�������ʵֻ�����У����� %5 ����
var LiuQinArray = [
  "�ֵ�",//+0��ͬ��
  "����",//+1������
  "�޲�",//+2���ҿ�
  "�ٹ�",//+3������
  "��ĸ" //+4������
];

//�������飬���� %6 ����
var LiuShenArray = [
  "����",//0
  "��ȸ",//1
  "����",//2
  "����",//3
  "�׻�",//4
  "����" //5
];
//�ո�������
var RiGanQiLiuShen = [
    0,0, //����������
    1,1, //��������ȸ
    2,   //���𹴳�
    3,   //��������
    4,4, //������׻�
    5,5  //�ɹ�������
];
//���񶯻�Ӧ��
/**
��س�����а׻��������߶����߳����������б����Ƕ����춯�з�ɣ����������裬�䶯������
�������������²������߶����Ļ����������仯���ﶯ������������������䶯��������
��ʶ�������У�
��Ϊ����Ϊľ����Ϊˮ����Ϊ�𡣳±仯�����ճ�����Ϊ��
ע�⣬���µ�����������֧�����ġ�
 */
var LiuShenYingShi = [
  "�������裺�����������߸����������������ͨ�����ƽ�»���޿գ��ٳ����ɶ����棬��ɫ�����ڴ��С�",//0
  "��ȸϧ�ɣ�����𡣲��߸������ȸ������ӡ����ɷ���ಢ���͹����Ƿǿ������ˣ���������ȴ������",//1
  "�����Ƕ������仯�����߸�������·���������������ބ߁Ϊ�ɷ꣬�������鷽�Ǽ�����Ȼ���������ɡ�",//2
  "���߳��������Ļ������߸����Ο�߹�����Ӱ�������ħ���﹥����Ĺ����ݵ��������֮��Ī���ס�",//3
  "�׻���ɽ�������²��������߸�����׻�����ɥ���£���˾�����س��ף��ֽ𶯿˷��˿ڣ���������㲻ͬ��",//4
  "�������ˣ������������߸�������䶯ҡ�వ�������ٹٹ�����������������а�޷��������֮����ס�" //5
];

//////////////////////////////////////////////////////
//64��
//����س�������������
function LiuYaoArrayToGuaIndex(arrYao)
{
    var ix = arrYao[0] * 1
            +arrYao[1] * 2
            +arrYao[2] * 4
            +arrYao[3] * 8
            +arrYao[4] * 16
            +arrYao[5] * 32;
    return ix;    
}

//�ȿ������ٿ�Ӧس���ٿ���س���������
////�������񶯻���
//�Թ��ڰ˸��Եĺ�����ţ������λ꣬���ǹ��
var GongNeiXuHao = [
  "һ", "��", "��", "��", "��", "��", "��", "��"
];
//���ڰ˸��Եĳƺ�
var GongNeiBaGuaMingChen = [
  "����", "����", "����", "����", "����", "����", "�λ�", "���"
];
//����سλ�ã���Ŵ�0��5
var AnShiYao = [
    5, //��������
    0, //һ��
    1, //����
    2, //����
    
    3, //����
    4, //����
    3, //�λ� ����
    2  //��� ����
];
//�����
//  "��", 0
//  "��", 1
//  "��", 2
//  "��", 3
//  "��", 4
//  "��", 5
//  "��", 6
//  "Ǭ"  7
//��0����������1���Թ���ţ���2�й��ڰ˸��Ե����
//��3��Ӧس��س��ϵ�����ˡ���ϡ���
var Array64Gua = [
    //��������
    //000 000
    ["��Ϊ��", 0, 0, "�����"],
    //000 001
    ["���׸�", 0, 1, "���Ͽ�"],
    //000 010
    ["��ˮʦ", 2, 7, "����Ӧ"],
    //000 011
    ["������", 0, 2, "Ӧ����"],
    //000 100
    ["��ɽǫ", 3, 5, "����Ӧ"],
    //000 101
    ["�ػ�����", 2, 6, "Ӧ����"],
    //000 110
    ["�ط���", 1, 4, "��Ӧ��"],
    //000 111
    ["����̩", 0, 3, "������"],
    ///////////////////////////
    //�������
    //001 000
    ["�׵�ԥ", 1, 1, "������"],
    //001 001
    ["��Ϊ��", 1, 0, "�����"],
    //001 010
    ["��ˮ��", 1, 2, "����Ӧ"],
    //001 011
    ["�������", 3, 7, "��Ӧ��"],
    //001 100
    ["��ɽС��", 3, 6, "����Ӧ"],
    //001 101
    ["�׻��", 2, 5, "Ӧ����"],
    //001 110
    ["�׷��", 1, 3, "Ӧ����"],
    //001 111
    ["�����׳", 0, 4, "�����"],
    //////////////////////////////
    //�Ͽ�����
    //010 000
    ["ˮ�ر�", 0, 7, "Ӧ����"],
    //010 001
    ["ˮ����", 2, 2, "����Ӧ"],
    //010 010
    ["��Ϊˮ", 2, 0, "�����"],
    //010 011
    ["ˮ���", 2, 1, "���Ͽ�"],
    //010 100
    ["ˮɽ�", 3, 4, "Ӧ����"],
    //010 101
    ["ˮ��ȼ�", 2, 3, "��Ӧ��"],
    //010 110
    ["ˮ�羮", 1, 5, "����Ӧ"],
    //010 111
    ["ˮ����", 0, 6, "����Ӧ"],
    //////////////////////////////
    //�϶Ұ���
    //011 000
    ["�����", 3, 2, "����Ӧ"],
    //011 001
    ["������", 1, 7, "��Ӧ��"],
    //011 010
    ["��ˮ��", 3, 1, "������"],
    //011 011
    ["��Ϊ��", 3, 0, "�����"],
    //011 100
    ["��ɽ��", 3, 3, "Ӧ����"],
    //011 101
    ["����", 2, 4, "����Ӧ"],
    //011 110
    ["�����", 1, 6, "Ӧ����"],
    //011 111
    ["�����", 0, 5, "����Ӧ"],
    //////////////////////////////
    //���ް���
    //100 000
    ["ɽ�ذ�", 7, 5, "����Ӧ"],
    //100 001
    ["ɽ����", 6, 6, "����Ӧ"],
    //100 010
    ["ɽˮ��", 5, 4, "Ӧ����"],
    //100 011
    ["ɽ����", 4, 3, "Ӧ����"],
    //100 100
    ["��Ϊɽ", 4, 0, "�����"],
    //100 101
    ["ɽ����", 4, 1, "���Ͽ�"],
    //100 110
    ["ɽ���", 6, 7, "����Ӧ"],
    //100 111
    ["ɽ�����", 4, 2, "Ӧ����"],
    ////////////////////////////////
    //�������
    //101 000
    ["��ؽ�", 7, 6, "Ӧ����"],
    //101 001
    ["�������", 6, 5, "Ӧ����"],
    //101 010
    ["��ˮδ��", 5, 3, "��Ӧ��"],
    //101 011
    ["�����", 4, 4, "Ӧ����"],
    //101 100
    ["��ɽ��", 5, 1, "������"],
    //101 101
    ["��Ϊ��", 5, 0, "�����"],
    //101 110
    ["��綦", 5, 2, "Ӧ����"],
    //101 111
    ["�������", 7, 7, "Ӧ����"],
    ////////////////////////////////
    //�������
    //110 000
    ["��ع�", 7, 4, "��Ӧ��"],
    //110 001
    ["������", 6, 3, "Ӧ����"],
    //110 010
    ["��ˮ��", 5, 5, "����Ӧ"],
    //110 011
    ["��������", 4, 6, "Ӧ����"],
    //110 100
    ["��ɽ��", 4, 7, "����Ӧ"],
    //110 101
    ["������", 6, 2, "Ӧ����"],
    //110 110
    ["��Ϊ��", 6, 0, "�����"],
    //110 111
    ["����С��", 6, 1, "Ӧ����"],
    ////////////////////////////////
    //��Ǭ����
    //111 000
    ["��ط�", 7, 3, "���Ͽ�"],
    //111 001
    ["��������", 6, 4, "�����"],
    //111 010
    ["��ˮ��", 5, 6, "Ӧ����"],
    //111 011
    ["������", 4, 5, "����Ӧ"],
    //111 100
    ["��ɽ��", 7, 2, "����Ӧ"],
    //111 101
    ["���ͬ��", 5, 7, "Ӧ����"],
    //111 110
    ["��犥", 7, 1, "Ӧ����"],
    //111 111
    ["ǬΪ��", 7, 0, "�����"]
];

function Get64GuaMing(ix)
{
    if(ix<0 || ix>=64)
    {
        return "����Ŵ���";
    }
    var str = Array64Gua[ix][0];
    //����Ϊ������ֿ��
    if( str.length < 4)//������
    {
        str = "&emsp;" + str + "&emsp;";//���������ֿ��
    }
    else//�ĸ���
    {
        str = "&emsp;" + str ;//��һ�����ֿ��
    }
    return str;    
}

//64�����壬��ƴ����ע��
var Array64GuaShiYi = [
    //��������
    //000 000
    "����k��n��Ϊ�أ��ϵ��µأ��������壬�����ų⣬���Ķ��ǡ�",
    //000 001
    "���׸���f�������ϵ����ף��ײ��ڵ��£����������������졣�������ǰ��ʱ��������", 
    //000 010
    "��ˮʦ��sh������������ˮ��ȡ֮��������ʦѧ�գ�ѧϰ���ܡ�",
    //000 011
    "�����٣�l��n�����ϵ������پ������Լ����¿�����˼����Ҫˮ���Լ����´򾮼��ɣ�����Σ�����Լ������ˡ�", 
    //000 100
    "��ɽǫ��qi��n����������ɽ��ɽ�ص��ص��£�����ǫѷ��x��n�����ã�����ʵ����������ϻ���", 
    //000 101
    "�ػ����ģ�y�����������л�������̫��������ƽ�ߡ����ڶ��������������Ѿ���¶�򼴽���¶��������",
    //000 110
    "�ط������ϵ��·磬����ľ���ط���ʵ��ָ��ľ�εض�������֮�࣬��������ɳ���",
    //000 111
    "����̩��t��i�����ϵ����죬̩�ǰ�������˼����ط���Ϊʲô�������������޼ɷ��������ɣ��ϰ��տ��������ڽ�ͷָ���������������ͣ������������ǿ�󣬴���ƽ���е�ʵ��ƽ�⡣", 
    ///////////////////////////
    //�������
    //001 000
    "�׵�ԥ��y�����������µأ�����������ף�ͣ����ͣ���߲����ߣ���ԥ����֮�࣬����С���ᡣ",
    //001 001
    "��zh��n��Ϊ�ף����¶��ڴ��ף������¡��������ֲ������顣ռ�����ߣ�������", 
    //001 010
    "��ˮ�⣨ji������������ˮ����ʵ���Ǵ��ס����ꡢ��ʣ����������������������ǰ���ƽ���", 
    //001 011
    "������ã�������������ľ�������𣬻�����ӣ����ó��Ե�ʡ����ҹ��á�������������ҽ�������������ȫ�Ǽٻ��ջ�������ռ����ſ��ڣ�ûϷ��",
    //001 100
    "��ɽС����������ɽ������ɽ��û��أ���δ���֡�С��ָ��δ�γɴ�����ڸı�������Ի����ü������������Ρ����Դ��������д��ת�䣬�Ա��ⲻ����",
    //001 101
    "�׻�᣺�����»𣬷��Ǹ�����ӵ���˼�����Ͻ��ͣ��������¸��ӽ�����",
    //001 110
    "�׷�㣨h��ng���������·磬���ǳ־õ���˼���������ơ���������������ڵĺ��������ҡ����顢�Ǳ�Ϊ��ȡ�", 
    //001 111
    "�����׳���������ϣ������ִ���׳���������ư���p��ng���磨b������ǿӲ׳��", 
    //////////////////////////////
    //�Ͽ�����
    //010 000
    "ˮ�رȣ�ˮ�ڵ��ϣ�ˮ�������·��½�أ������������Ϊ�ȣ�������Ȼ���£�������Ȼ�ࣨh��ng���ϡ�", 
    //010 001
    "ˮ���ͣ�zh��n������ˮ���ף��;������ѵ���˼��ˮ�����ף��������죬�����𲽼��ѡ�",
    //010 010
    "����k��n��Ϊˮ����ˮ��ˮ���������������������ִ����檡��������ȸ��鷺��֮�¡�", 
    //010 011
    "ˮ��ڣ�ˮ�������У������ɽ��ƣ�����֮�࣬���ǰ����˵���˼�졣",
    //010 100
    "ˮɽ忣�ji��n������ˮ��ɽ��������಻˳������˼��ˮ���ʹ�������ȴ�ܵ�ɽ����ˮ����Ȼ�������أ������״�ɵ�Ŀ�����ʵ�ľٶ���",
    //010 101
    "ˮ��ȼã�ˮ�����������˻𣬼ȼ���ʤ������˼��", 
    //010 110
    "ˮ�羮����ˮ�·磬�������Ķ�ˮ����ʵ������Ȫ�������Լ���ˮ����ˮ���Զ������磬ԴԴ���ϡ����������˺ࣨh��ng��ͨ�������Լ�ð������",
    //010 111
    "ˮ���裨x������ˮ�����ϣ��輴������������꣬����ȴ�ʱ���������Ҷ���",
    //////////////////////////////
    //�϶Ұ���
    //011 000
    "����ͣ�cu�����������µأ�����ˮ��ïʢ�����ӣ���������֮�⡣�����������ƴ��£��ʺϽ�ȡ��չ��",
    //011 001
    "�����棨su�������������ף�������������˼��������ľ����������ʧ��ˮ��֮�У��������Ѻ�Σ�ն���ȥ�ˡ�",
    //011 010
    "��ˮ����������ˮ��ˮ�������ڲ���ͨ��������־���죬����֮�ࡣ�����������ԣ�ռ����������", 
    //011 011
    "�ң�du����Ϊ����������ָ�����������һƬ���ڻ��ͨ������ѧʶ֮�ࡣ", 
    //011 100
    "��ɽ�̣�xi��n����������ɽ������һ�Ρ����Ǹ�Ӧ�о���ˮ����ɽ���������о���������ʵ�������ζ��ѡ�ռ�ô��ԣ�������������ʵ������Ͽ�һ�Ρ�", 
    //011 101
    "���g�����������»𣬸��ǳ�ȥ����˼�������ˮ���У��𱻳��𣬴�����������",
    //011 110
    "������������·磬������ش�����������ķ磬�봵�ɺ��󣬽�����棬������ʩ�������ش���",
    //011 111
    "�������gu��i�����������죬���Ƿ־�����ˮ�����˼��ˮ����컹�ߣ�����ʵ��˵���ں���ĵ�Ӱ���ǵߵ�֮�࣬�������¼����׻����׻�����",
    //////////////////////////////
    //���ް���
    //100 000
    "ɽ�ذ���b��������ɽ�µأ�ɽΪ�ߣ���Ϊ�ͣ�������λ���˰�����λ���ˣ�����ѹե֮�⡣",
    //100 001
    "ɽ���ã�y������ɽ�����ף����ǳ����������ӵ���˼�������쳹ɽ�ȣ���������",
    //100 010
    "ɽˮ�ɣ�m��ng������ɽ��ˮ��ˮ��ɽ�ţ��������Σ����¿�Ϲ�ɣ������鲻�㣬��Ҫѧϰ����֪ʶ��",
    //100 011
    "ɽ����s��n������ɽ���󣬰�ɽͷ���������ϣ�������ɽ������ʧ֮�ࡣ",
    //100 100
    "�ޣ�g��n��Ϊɽ����ɽ��ɽ��һɽ����һɽ�ߣ�����ѹ�����ء�",
    //100 101
    "ɽ���ڣ�f��n����ɽ�������ͨ�ߣ�ŭ����������ɽ���������һ��������ʰ������Թ�����ۣ�ǿ�Ʊ�����",
    //100 110
    "ɽ��ƣ�g������ɽ����磬���Ǻ���а������˼�Ǽ������ٵĲ���а��������Σ����Ҫ������", 
    //100 111
    "ɽ�����x��������ɽ���죬�����������Ŵ��ƾ���Ϊ�����������Ǳ�������˳Ӧ���������գ���Ϊ��֮�ࡣ",
    ////////////////////////////////
    //�������
    //101 000
    "��ؽ���j��n�������ڵ��ϣ����ǻ�������֮�⣬����һ���˷�������Ҫ����������������֮������һ�Բ��Ͼ��Ǹɡ�",
    //101 001
    "������ྣ�sh�� h�������ϻ����ף���������ҧ����Ǳպ��죬��������ͬ����������ҧһ�����尾���",
    //101 010
    "��ˮδ�ã��ϻ���ˮ���������գ�ˮ��������˭��û�����˭��δ����ʧ�ܵ���˼��", 
    //101 011
    "�����ku�������ϻ�������������۾���������ˮ�����ղ�����������Σ����ʵû��Σ�գ��Լ����Լ���",
    //101 100
    "��ɽ�ã�l�������ϻ���ɽ�����ǳ�����·����˼���ִ�ȡ����ͬ��ɽ����������Ͻ��뿪֮�⡣", 
    //101 101
    "�루l����Ϊ���ϻ��»�ȫ�ǻ𣬷����֮�ࡣ", 
    //101 110
    "��綦��d��ng�����ϻ��·磬������ķ����𣬶��Ƕ���������������ľ��ľ�����ƣ�Խ��Խ���������й��˶���������",
    //101 111
    "������У��������ϣ��������Ƽ��󣬴���ͻ����ʡ��������ѻ��ߴ��вƸ�֮�ࡣ", 
    ////////////////////////////////
    //�������
    //110 000
    "��عۣ�gu��n�������ڵ��ϣ������Ѷ�������һ������˵����Χ�ۡ�", 
    //110 001
    "�����棨y�������Ϸ����ף������Ϊ�֣��������ӵ���˼������֮���ټ����ѣ�ѩ�ϼ�˪��", 
    //110 010
    "��ˮ����hu��n�����Ϸ���ˮ������ˮ�𣬻�Ȼһ�£����￪ʼ��չ֮�ࡣ", 
    //110 011
    "�������ڣ�f�������Ϸ�����˭Ҳ������˭�������Ǵ�����������˼��",
    //110 100
    "��ɽ����ji��n�����Ϸ���ɽ�����������ء��𽥣�����ľ����ľ��ɽ��������������׳�󡣴���ѭ�򽥽������ڻ�ҵ��",
    //110 101
    "�����ˣ��Ϸ��»𣬷������ƣ������˼ң��������ˣ�����Һ��˶������ѣ�����֮�ࡣ", 
    //110 110
    "�㣨x��n��Ϊ�磺�Ϸ��·磬˫��Զ����������﷢չ˫��仯֮�ࡣ", 
    //110 111
    "����С��x������������磬�ǿ������δ������ף���������֮�⣬����Ҫ����Σ������ͷ��", 
    ////////////////////////////////
    //��Ǭ����
    //111 000
    "��ط�p�����������µأ����ǻ�����������˼��Ϊʲô��ؿ�������������������Ϊ���۸����˵أ����������죬��������е����ز���������̰��������ѹ���չ��ˣ����������ͷ��",
    //111 001
    "����������w��ng�����������ף����������ˣ�����֮�֣�������������֮�֡�",
    //111 010
    "��ˮ�ϣ�s��ng����������ˮ��ׯ�ڿ�������������ˮ̫�󷴶����֡��������Ҽ��ַ�ʡ�����������ǣ��Ӱ�˼Σ��", 
    //111 011
    "�����ģ�l���������������������ߵ��㼣����������ѭ��ǰ�˵��㼣���ߣ��Ͳ�����������ѧϰǰ�˾����û�����ѡ�",
    //111 100
    "��ɽ�ݣ�d��n����������ɽ��ɽ����·�����ǵ�·����˼��ɽ����·���У�������ȷ����һ��һ����߹�ִ��һ�����ߵ��ڣ���",
    //111 101
    "���ͬ�ˣ������л𣬿���Ϊ�ã�Ҳ����Ϊ�֣�ͬ�˾�������ͬ��Э����ͬ�ʹ���֮�⡣",
    //111 110
    "��犥��g��u���������з磬������������˼�������������˺�������������е�ʱ����", 
    //111 111
    "Ǭ��qi��n��Ϊ�죺�������죬�������壬�ƾ����У��Գ�����֮�ࡣ"
];

//��0  ��1  ��2  î3  ��4  ��5
//��6  δ7  ��8  ��9  ��10  ��11

//��0  ��1  ��2  ��3  ��4
//��5  ��6  ��7  ��8  ��9
//��ɲ���»
var TGLuStrs = [
    "��", "î", //����
    "��", "��", //����
    "��", "��", //�켺
    "��", "��", //����
    "��", "��"  //�ɹ�
];
//�ոɲ����
var TGGuiRenStrs = [
    "��δ", //�����ţ��
    "�ӡ���", //�Ҽ������
    "������", //������λ
    "������", //��
    "��δ", //��
    "�ӡ���", //��
    "�硢��", //��������
    "�硢��", //��
    "î����", //�ɹ����߲�
    "î����"  //��
];

//��֧���һ�����֧���%4 ��������
var DZTaoHuaStrs = [
    "��", //��0�����ӳ�������
    "��", //��1�����ϳ󣬼���
    "î", //��2�������磬��î
    "��"  //��3����îδ������
];

//��֧��������֧���%4 ��������
var DZYiMaStrs = [
  "��", //���ӳ�������
  "��", //���ϳ󣬳庥
  "��", //�����磬����
  "��"  //��îδ������
];

//���Է�ʽ
var QiGuaFangShiStrs = [
    "�ֹ�ҡ��", //0
    "ʱ������", //1
    "��������", //2
    "��������"  //3
];
//
//���ݰ��ֶ�����س������������������ݣ�����������س������Ϣ
function GenFullLiuYaoPaiPan(bzpp, lypp)
{
    //////////////////////////////////
    //���ű���
    //���㱾��������š��������
    lypp.bgShangGuaIndex = SanYaoToBaGuaIndex(lypp.arrYinYang[3], lypp.arrYinYang[4], lypp.arrYinYang[5]);
    lypp.bgXiaGuaIndex = SanYaoToBaGuaIndex(lypp.arrYinYang[0], lypp.arrYinYang[1], lypp.arrYinYang[2]);
    //������������
    lypp.bgIndex = LiuYaoArrayToGuaIndex( lypp.arrYinYang );
    lypp.bgWuXing = BaGuaWuXing[ Array64Gua[lypp.bgIndex][1] ]; //��ȡ�Թ�����ȡ�Թ���������
    ///////////////
    //����6����֧
    lypp.bgDiZhi = new Array(6);
    //���ԣ�3��4��5
    lypp.bgDiZhi[3] = NaJiaDiZhi[ lypp.bgShangGuaIndex ][3];
    lypp.bgDiZhi[4] = NaJiaDiZhi[ lypp.bgShangGuaIndex ][4];
    lypp.bgDiZhi[5] = NaJiaDiZhi[ lypp.bgShangGuaIndex ][5];
    //���ԣ�0��1��2
    lypp.bgDiZhi[0] = NaJiaDiZhi[ lypp.bgXiaGuaIndex ][0];
    lypp.bgDiZhi[1] = NaJiaDiZhi[ lypp.bgXiaGuaIndex ][1];
    lypp.bgDiZhi[2] = NaJiaDiZhi[ lypp.bgXiaGuaIndex ][2];
    ////////////////////////
    //����6�����
    lypp.bgTianGan = new Array(6);
    //���ԣ�3��4��5
    lypp.bgTianGan[3] = NaJiaTianGan[ lypp.bgShangGuaIndex ][3];
    lypp.bgTianGan[4] = NaJiaTianGan[ lypp.bgShangGuaIndex ][4];
    lypp.bgTianGan[5] = NaJiaTianGan[ lypp.bgShangGuaIndex ][5];
    //���ԣ�0��1��2
    lypp.bgTianGan[0] = NaJiaTianGan[ lypp.bgXiaGuaIndex ][0];
    lypp.bgTianGan[1] = NaJiaTianGan[ lypp.bgXiaGuaIndex ][1];
    lypp.bgTianGan[2] = NaJiaTianGan[ lypp.bgXiaGuaIndex ][2];
    ////////////////
    //���Եĵ�֧���С��������
    lypp.bgDZWX = new Array(6); //ľ0 ��1 ��2 ��3 ˮ4
    lypp.bgLiuQin = new Array(6);//�ֵ�0 ����1 �޲�2 �ٹ�3 ��ĸ4
    for(var i=0; i<6; i++)
    {
        lypp.bgDZWX[i] = DiZhiChaWuXing[ lypp.bgDiZhi[i] ];//��֧������
        //��������
        lypp.bgLiuQin[i] = (lypp.bgDZWX[i] + 5 - lypp.bgWuXing) % 5;//����ֻ�����
    }
    ////////////////////
    //��سӦسλ�ã���ȡ�����Թ��ڵ����
    var bgGongNeiIndex = Array64Gua[lypp.bgIndex][2] ;
    lypp.bgShiYao = AnShiYao[bgGongNeiIndex];
    lypp.bgYingYao =  (lypp.bgShiYao + 3) % 6;
    //��¼������س1��Ӧس2����ͨس0 ������
    lypp.bgShiYingPu = new Array(6);
    for(var i=0; i<6; i++)//��ʼ��Ϊ0
    {
        lypp.bgShiYingPu[i] = 0; 
    }
    lypp.bgShiYingPu[lypp.bgShiYao] = 1; //�����س
    lypp.bgShiYingPu[lypp.bgYingYao] = 2; //���Ӧس
    //////////////////////////////////
    //����֮�ԣ����ԡ����ԣ������ݱ��ԺͶ�������֮��
    lypp.arrZGYinYang = new Array(6);
    for(var i=0; i<6; i++)
    {
        lypp.arrZGYinYang[i] = (lypp.arrYinYang[i] + lypp.arrDongJing[i])%2;
    }    
    //����֮�Ե��������
    lypp.zgShangGuaIndex = SanYaoToBaGuaIndex(lypp.arrZGYinYang[3],lypp.arrZGYinYang[4],lypp.arrZGYinYang[5]);
    lypp.zgXiaGuaIndex = SanYaoToBaGuaIndex(lypp.arrZGYinYang[0],lypp.arrZGYinYang[1],lypp.arrZGYinYang[2]);
    //֮�Ե����򣬲���Ҫ��֮�Ե�����
    lypp.zgIndex = LiuYaoArrayToGuaIndex( lypp.arrZGYinYang );
    //////////////////////
    //����֮��������֧
    lypp.zgDiZhi = new Array(6);
    //���� 345
    lypp.zgDiZhi[3] = NaJiaDiZhi[lypp.zgShangGuaIndex][3];
    lypp.zgDiZhi[4] = NaJiaDiZhi[lypp.zgShangGuaIndex][4];
    lypp.zgDiZhi[5] = NaJiaDiZhi[lypp.zgShangGuaIndex][5];
    //���� 012
    lypp.zgDiZhi[0] = NaJiaDiZhi[lypp.zgXiaGuaIndex][0];
    lypp.zgDiZhi[1] = NaJiaDiZhi[lypp.zgXiaGuaIndex][1];
    lypp.zgDiZhi[2] = NaJiaDiZhi[lypp.zgXiaGuaIndex][2];
    /////////////////////
    //�����������
    lypp.zgTianGan = new Array(6);
    //���� 345
    lypp.zgTianGan[3] = NaJiaTianGan[lypp.zgShangGuaIndex][3];
    lypp.zgTianGan[4] = NaJiaTianGan[lypp.zgShangGuaIndex][4];
    lypp.zgTianGan[5] = NaJiaTianGan[lypp.zgShangGuaIndex][5];
    //���� 012
    lypp.zgTianGan[0] = NaJiaTianGan[lypp.zgXiaGuaIndex][0];
    lypp.zgTianGan[1] = NaJiaTianGan[lypp.zgXiaGuaIndex][1];
    lypp.zgTianGan[2] = NaJiaTianGan[lypp.zgXiaGuaIndex][2];
    ///////////////////////
    //֮�Եĵ�֧���С��������
    lypp.zgDZWX = new Array(6); //ľ0 ��1 ��2 ��3 ˮ4
    lypp.zgLiuQin = new Array(6);   //�ֵ�0 ����1 �޲�2 �ٹ�3 ��ĸ4
    for(var i=0; i<6; i++)
    {
        lypp.zgDZWX[i] = DiZhiChaWuXing[ lypp.zgDiZhi[i] ]; //��֧������
        //��������
        lypp.zgLiuQin[i] = (lypp.zgDZWX[i] + 5 - lypp.bgWuXing) % 5;//����ֻ������
    }
    ////////////////////
    //��سӦسλ�ã���ȡ�����Թ��ڵ����
    var zgGongNeiIndex = Array64Gua[lypp.zgIndex][2] ;
    lypp.zgShiYao = AnShiYao[ zgGongNeiIndex ];//��س
    lypp.zgYingYao =  (lypp.zgShiYao + 3)%6;    //Ӧس
    //��¼֮����س1��Ӧس2����ͨس0 ������
    lypp.zgShiYingPu = new Array(6);
    for(var i=0; i<6; i++)//��ʼ��Ϊ0
    {
        lypp.zgShiYingPu[i] = 0; 
    }
    lypp.zgShiYingPu[lypp.zgShiYao] = 1; //�����س
    lypp.zgShiYingPu[lypp.zgYingYao] = 2; //���Ӧس    
    
    /////////////////////////////////////
    //����������������
    //�����ո�
    var nRiGan = bzpp.iRiJZ % 10;
    var lsStart = RiGanQiLiuShen[nRiGan]; //��������ʼ������
    lypp.arrLiuShen = new Array(6);
    for(var i=0; i<6; i++)
    {
        lypp.arrLiuShen[i] = (lsStart+i) % 6;//����������
    }
    //����1������2������0
    lypp.arrMingAnDong = new Array(6);
    for(var i=0; i<6; i++)
    {
        //�ж϶���س
        if( lypp.arrDongJing[i] > 0)
        {
            lypp.arrMingAnDong[i] = 1; //����
        }
        else
        {
            //��س���ٷְ�����ȫ��
            if(   (lypp.bgTianGan[i] != lypp.zgTianGan[i])
                ||(lypp.bgDiZhi[i] != lypp.zgDiZhi[i]) )//ǰ��س�ĸ�֧�в�ͬ�����ǰ���
            {
                lypp.arrMingAnDong[i] = 2; //����
            }
            else
            {
                lypp.arrMingAnDong[i] = 0; //����
            }
        }
    }    
    ///////////////////////////////////
    //���㱾��û�е����У�ľ0 ��1 ��2 ��3 ˮ4
    var awxCount = new Array(5);
    for(var k=0; k<5; k++)//��ʼ��Ϊ0
    {
        awxCount[k] = 0;
    }
    //��������س�����������Ƿ�����
    for(var i=0; i<6; i++)
    {
        awxCount[ lypp.bgDZWX[i] ]++;
    }//����Ϊ0�����������û���Ե�
    
    //�������ֱ��д���ַ�������
    lypp.FuShenStrs = new Array(6);
    for(var i=0; i<6; i++)//����������
    {
        lypp.FuShenStrs[i] = GetNSpace(5); //��ʼ��Ϊ5���ֿո�
    }
    //���Ե��Թ��������
    var bgGuaGongIndex =  Array64Gua[lypp.bgIndex][1] ;
    //����ĵ�֧�����
    var fsDiZhi = NaJiaDiZhi[bgGuaGongIndex] ;//�Թ����Ե�6��ֱ��ȫ������
    var fsTianGan = NaJiaTianGan[bgGuaGongIndex] ;//�������
    //���Ե�������֧����
    var fsDZWX = new Array(6);
    for(var i=0; i<6; i++)
    {
        fsDZWX[i] = DiZhiChaWuXing[ fsDiZhi[i] ]; //��һ�е�����
        //�ж���������
        if( awxCount[ fsDZWX[i] ] < 1 )//û������
        {
            //�������ַ���
            lypp.FuShenStrs[i] = LiuQinArray[ (fsDZWX[i]+5 - lypp.bgWuXing) % 5 ]
                + TianGan[ fsTianGan[i] ]
                + DiZhi[ fsDiZhi[i] ]
                + WuXing[ fsDZWX[i] ];
        }//Ĭ���Ѿ�����������ֿո����Ե��������в���
    } 
    /////////////////////////////////
    //�������㣺�������ˣ������� ���������ж������Ͱ���
    lypp.arrHuaShenStr = new Array(6);
    //�ж�
    for(var i=0; i<6; i++)
    {
        if( lypp.arrMingAnDong[i] < 1 )//ȫ��س
        {
            lypp.arrHuaShenStr[i] = GetNSpace(2);//���˫�ո�
        }
        else//��س��������������
        {
            //�жϷ�������
            if( lypp.bgDiZhi[i] === lypp.zgDiZhi[i] )//������
            {
                lypp.arrHuaShenStr[i] = "����";
            }
            else if( lypp.bgDiZhi[i] === (lypp.zgDiZhi[i]+6)%12 )
            {
                //�������֧������
                lypp.arrHuaShenStr[i] = "����";
            }
            else if(lypp.bgDZWX[i] !== lypp.zgDZWX[i]  ) //��ȥ���������������֧���в�һ����˵��û�л�������
            {
                lypp.arrHuaShenStr[i] = "��" + GetNSpace(1);
            }
            else//ǰ������һ���������Ƿ���������
            {                
                //�����ж�
                if( JinShenArray[ lypp.bgDiZhi[i] ] === lypp.zgDiZhi[i] )
                {
                    lypp.arrHuaShenStr[i] = "����" ;
                }
                //�����ж�
                else if( TuiShenArray[ lypp.bgDiZhi[i] ] === lypp.zgDiZhi[i] )                 
                {
                    lypp.arrHuaShenStr[i] = "����" ;
                }
                else
                {
                    lypp.arrHuaShenStr[i] = "��" + GetNSpace(1);//û�鵽
                }//end ��������
            }//end ��������
        }//end ��س
    }//end for     
    
    //////////////////////////////////
    //�ж�ȫ����
    var sum = 0;
    for(var i=0; i<6; i++)
    {
        sum += lypp.arrDongJing[i];
    }
    lypp.bQuanJingGua = false; //Ĭ�ϲ���ȫ��
    if( sum < 1 )//û�ж�س
    {
        lypp.bQuanJingGua = true; //û�ж�س��ȫ��
        //alert("ȫ����");
    }    
    //������������س����
    return lypp;
}


//�����ж�
var JinShenArray = [
    -1, //0��û��
    4,  //1�󻯳�
    3,  //2����î
    -1, //3îû��
    7,  //4����δ
    6,  //5�Ȼ���
    -1, //6��û��
    10, //7δ����
    9,  //8�껯��
    -1, //9��û��
    1,  //10�绯��
    0   //11������
];
//��0  ��1  ��2  î3  ��4  ��5
//��6  δ7  ��8  ��9  ��10  ��11
//�����ж�
var TuiShenArray = [
    11, //0���˺�
    10, //1������
    -2, //2��û��
    2,  //3î����
    1,  //4���˳�
    -2, //5��û��
    5,  //6������
    4,  //7δ�˳�
    -2, //8��û��
    8,  //9������
    7,  //10����δ
    -2  //11��û��
];



//�ֹ�س�����飬����0������1������2������3
//�ֹ�س��Ӧ���ַ���
var ShouGongYaoStrs = [
  "�|�|&emsp;�|�|&emsp;",//����
  "�|�|�|�|�|&emsp;",    //����
  "�|�|&emsp;�|�|�w",    //����
  "�|�|�|�|�|��"   //����
];
//var SpaceEN2 = "&emsp;";//˫Ӣ�ո�
function GetLiuYaoHTML(bzpp, lypp)
{
    //���̵�HTML�ַ���
    var strResult =  "<div align='left' style='line-height: 18pt; font-family: ����;'>"; 
    var strTemp = "";
    //�����б�ǿ�ʼ
    strResult += "<span style='white-space: nowrap;'>";
    //��ӡ����ռ�¡����Է�ʽ���Ա�����
    strTemp = "��ռ���飺" + lypp.strZhanShi + CheckLiuNianGua(lypp.strZhanShi) + "<br>";
    
    strResult += strTemp;
    strTemp = "���Է�ʽ��" +  lypp.strQiGuaFangShi + "<br>"
        + "�����Ա�" + GetBoldText( lypp.strGender ) + "��"
        + "������ݣ�" + lypp.strShengNian + "<br>";
    strResult += strTemp;
    //������ũ��ʱ��
    strResult += GetGGTimeStr(bzpp.JDBirth) + "<br>";
    strResult += GetNNTimeStr(bzpp.JDBirth) + "<br>";
    //������֧������ɷ
    var riGan = bzpp.iRiJZ % 10;
    var riZhi = bzpp.iRiJZ % 12;
    strTemp = "��ɷ�����ˡ�" + TGGuiRenStrs[riGan]
        + "�������" + DZYiMaStrs[riZhi%4]
        + "���һ���" + DZTaoHuaStrs[riZhi%4]
        + "����»��" + TGLuStrs[riGan] +  "<br>";
    strResult += strTemp;    
    //��֧��ʱ
    strTemp = "��֧��" + GetBoldText( GetBlueText( JiaZi[bzpp.iNianJZ] ) ) + "��"
        + SpaceEN2 + GetBoldText( GetFuchsiaText( JiaZi[bzpp.iYueJZ] ) ) + "��"
        + SpaceEN2 + GetBoldText( GetFuchsiaText( JiaZi[bzpp.iRiJZ] ) ) + "��"
        + SpaceEN2 + GetBoldText(  JiaZi[bzpp.iShiJZ] ) + "ʱ "
        +  GetBoldText( GetFuchsiaText( GetRiKongWang( bzpp.iRiJZ ) ))
        + "<br>" ;
    strResult += strTemp; 
    strResult += "<br>";
    ///////////////////////////
    //������
    strTemp = GetNSpace(9) 
        + GetBoldText( GetFuchsiaText(Get64GuaMing( lypp.bgIndex )))//������������س
        + GetNSpace(1) //����OX
        + "��" + Array64Gua[ lypp.bgIndex ][3] + "��" //��������
        + GetNSpace(1) + GetNSpace(1) //������Ӧ
        + GetBlackText("֮" + GetNSpace(1) ) +  GetNSpace(1) //����֮��
        //�ټӺ���
        + GetBoldText( GetFuchsiaText(Get64GuaMing( lypp.zgIndex )))//������������س
        + GetNSpace(1) //����ո�
        + "��" + Array64Gua[ lypp.zgIndex ][3] + "��" //��������
    ;       
    strResult += strTemp + "<br>";
    //���Թ�
    strTemp = "����" + GetNSpace(2) + "��"+ GetNSpace(1) + "��" + GetNSpace(2) 
        + "&emsp;" + BaGua[ Array64Gua[lypp.bgIndex][1] ] + "��" 
        + GongNeiBaGuaMingChen[ Array64Gua[lypp.bgIndex][2] ]  //����س
        + GetNSpace(1) //����OX
        + GetNSpace(5)  //��������
        + GetNSpace(1) + GetNSpace(1) //������Ӧ
        + GetBlackText( GetNSpace(2) ) +  GetNSpace(1) //����֮��
        //�ټӺ���
        + "&emsp;" + BaGua[ Array64Gua[lypp.zgIndex][1] ] + "��" 
        + GongNeiBaGuaMingChen[ Array64Gua[lypp.zgIndex][2] ]  //����س
        + GetNSpace(1) //����OX
        + GetNSpace(5) //�����������
    ; 
    strResult += strTemp + "<br>";
    
    //������
    for(var i=5; i>=0; i--)
    {
        strTemp = LiuShenArray[ lypp.arrLiuShen[i] ] + GetNSpace(1) //����
            + lypp.FuShenStrs[i] + GetNSpace(1)  //����
            + PackMingAnColor( ShouGongYaoStrs[ lypp.arrShouGongYao[i] ], lypp.arrMingAnDong[i] )
            //���׸�֧���У�����Ӧ����ɫ
            +  PackShiYingPuColor( (LiuQinArray[ lypp.bgLiuQin[i] ] + TianGan[ lypp.bgTianGan[i] ] 
                + DiZhi[ lypp.bgDiZhi[i] ] + WuXing[ lypp.bgDZWX[i] ]
                + GetNSpace(1) + ShiYingPuStrs[ lypp.bgShiYingPu[i] ]) , lypp.bgShiYingPu[i])
            //����������ɫ��ͬ������س
            + PackMingAnColor( lypp.arrHuaShenStr[i], lypp.arrMingAnDong[i] ) + GetNSpace(1)
            //֮�Ե�����س
            + PackMingAnColor( ShouGongYaoStrs[ lypp.arrZGYinYang[i] ], lypp.arrMingAnDong[i] )
            //���׸�֧���У�����Ӧ����ɫ
            +  PackShiYingPuColor( (LiuQinArray[ lypp.zgLiuQin[i] ] + TianGan[ lypp.zgTianGan[i] ] 
                + DiZhi[ lypp.zgDiZhi[i] ] + WuXing[ lypp.zgDZWX[i] ]
                + GetNSpace(1) + ShiYingPuStrs[ lypp.zgShiYingPu[i] ]) , lypp.zgShiYingPu[i] )
        ;
        //׷��һ��
        strResult += strTemp + "<br>";
    }
    strResult += "<br>";
    strResult += "</span>"; //�����б�ǵ�ĩβ
    //��ӿ�����ʾ��Ϣ
    strResult += GetKanGuaTiShiInfo(bzpp, lypp);
    strResult += "<br>";
    //����ĩβ�ı�ǩ
    strResult += "<br></div>";
    //�滻���Ŀո���Ӧ�����ֻ����������
    strResult = strResult.replace(/&emsp;/g, "��");
    
    //����
    return strResult;
}

//����Ƿ�Ϊ������
function CheckLiuNianGua( strZhanShi )
{
    var year = parseInt(strZhanShi);
    var strRet = "";
    if( (year >= gStartYear) && (year <= gEndYear) )
    {
        var njz = GetNianJiaZiShu(year);
        strRet =  "������ " +  JiaZi[njz]  + WuXing[ DiZhiChaWuXing[njz%12] ]  ;
        strRet = "��" + GetBoldText( GetFuchsiaText(strRet) ) + "��";
    };
    return strRet;
}


//��ȡ���Ե���ʾ��Ϣ
function GetKanGuaTiShiInfo(bzpp, lypp)
{
    var strResult = "";
    var strTemp = "";
    strResult += "<br>";
    strResult += "<hr>";
    //���Ե�һ��������
    strTemp = "<b>1��������</b><br>����" + Array64GuaShiYi[ lypp.bgIndex ] + "<br>";
    if( ! lypp.bQuanJingGua )//����ȫ���ԣ��б���
    {
        strTemp += "����" + Array64GuaShiYi[ lypp.zgIndex ] +  "<br>"; 
    }
    strResult += strTemp;
    //�ڶ�������Ӧس
    strTemp = "<b>2����Ӧس</b><br>����Ӧس����س��ϵ��" + Array64Gua[ lypp.bgIndex ][3] + "<br>"
        + "���߸������Ӧ�����򼪣���Ӧ������ף���Ӧ�Ⱥ���ȴ�У�����ıΪ���á�Ӧ�����˷��䣬Ӧ��������ͬ��������������㼣�ֻ���Լ�������"
        + "<br>";
    strResult += strTemp;
    //������������س
    strTemp = "<b>3������س</b><br>����" +  LiuQinChiShiStrs[lypp.bgLiuQin[lypp.bgShiYao]] + "<br>" ;
    strResult += strTemp;
    //���Ĳ�������
     strTemp = "<b>4�����������ʱ</b>���ɽ����˶���<br>" 
            + "<a href=\"liuyaoinfo.htm#quyongshen\" target=\"new\">����鿴ȡ������ʾ </a><br> "
            + "<a href=\"liuyaoinfo.htm#quguashi\" target=\"new\">����鿴ȡ��ʱ��ʾ </a>��ȡ��ʱ�Զ�ռ�µ�������˥��"
            + "<br>"  ;
    strResult += strTemp;
    //���Ӳ��裬������ʾ
    strTemp = "<b>5�����������ʾ</b><br>";
    if( lypp.bQuanJingGua )//ȫ�����޶�
    {
        strTemp += "��<br>";
    }
    else//���ڶ�س
    {
        for(var i=5; i>=0; i--) //LiuShenYingShiΪ������������
        {
            if( lypp.arrMingAnDong[i] > 0 )//������������
            {
                strTemp += LiuShenYingShi[ lypp.arrLiuShen[i] ] + "<br>" ;
            }
        }
    }
    strResult += strTemp;
    return strResult;
}

//���׳���س���ж�
var LiuQinChiShiStrs = [
   //+0��ͬ��
  "�ֵܳ��������򷿡��񽱡��ż���Ϊ���������������ˡ����ӻ�����Ϊ�ס�<br>\
        ���߸�����ֵܳ���Ī��ƣ��������ǻ���������ȸ���ٷ����࣬��ҡ�ض����޲ƣ���ĸ���������٣����ٻ��������֡�",
   //+1������
  "��������������������С����յ�Ϊ��������ѧ�����ԡ���ְ��Ů�ӻ����Ȳ�����<br>\
        ���߸����������������ǣ������м�����ͷ��������ʧ�ɵã����ϴӴ˱����ݣ������޿���㼪���п����������",
  //+2���ҿ�
  "�޲Ƴ����������������ӻ��������ˡ�ʧ���Ϊ�����ⳤ������ĸ���򲻼���<br>\
        ���߸������س�����˲��٣��������ز��ɷ꣬��������������������˸�ɥ�ķ磬��������˲��У������ֹ������ס�",
  //+3������
  "�ٹ���������λ����Ǩ����������Ů�ӻ�����������ѧΪ�������ֵܰ�Σ���Լ������Ȳ�����<br>\
        ���߸������س�������Ѱ���ռ����Ҳ��٣�����ʱʱ��ʧ�ѣ�������ϲ����Ȩ����Ĺ������ɢ�գ����ת����Ϊ����",
  //+4������
  "��ĸ����������ѧ�����ԡ��ż������顢��Լ��Ϊ��������Ů������������Ϊ������<br>\
        ���߸������ĸ���������ͣ��������Ҳ���У��ٶ������˸��ԣ���ҡı��Ī�Ľ���ռ��ƶ����͸����п������ٲ��ߡ�" 
];
//

//�������������ɹ���ʱ���ַ���
function GetGGTimeStr(curJD)
{
    var myDD = JD.DD(curJD);
    var strTemp = "����ʱ�䣺" + String(myDD.Y) + "��" 
        + String(myDD.M) + "��"
        + String(myDD.D) + "��"
        + String(myDD.h) + "ʱ"
        + String(myDD.m) + "��"
        + "�� " + WeekDays[ GetiDayOfWeek(curJD) ] ;
    //����
    return strTemp;
}
//��������������ũ��ʱ���ַ���
function GetNNTimeStr(curJD)
{
    var myDD = JD.DD(curJD);//������
    //ũ����0���ǽ������ʱ��23������������ʱ��Ҫ����
    var theOB;
    if(myDD.h >= 23)//ũ��ʱ��
    {
        theOB = GetJDtoNongLiOB(curJD + 1);
    }
    else
    {
        theOB = GetJDtoNongLiOB(curJD);
    }
    var strTemp = "ũ��ʱ�䣺" + theOB.Lyear3 + "�� "
              + theOB.Lleap + theOB.Lmc + "�� "
              + theOB.Ldc + "�� "
              + DiZhi[ (Math.floor((myDD.h+1)/2 )) % 12 ] + "ʱ"
              + " ���Ƶ�" + String( theOB.Lyear0 + 1984 + 2698 + 56 ) + "�꣩";//�Ƶۼ�������϶�56��
    //����
    return strTemp;
}

function GetNSpace(n)
{
    var count = Number(n);
    if(count < 1)
    {
        return "";
    }
    //����
    var strRet = "";
    for(var i=0; i<count; i++)
    {
        strRet += SpaceEN2;
    }
    return strRet;
}
//��ɫ��������ɫ����
var ColorMingAn = [
    "black",
    "red",
    "#800080"
];
//���ݲ���������������������س����ɫ
function PackMingAnColor(text, ix)
{
    var clr = "black";
    if( ix>=0 && ix <=2 )
    {
        clr = ColorMingAn[ix];
    }
    //
    var strResult =  "<span style=\"color: " + clr + "\">";
    strResult += text;
    strResult += "</span>";
    return strResult;
}
//�� Ӧ �յ�����
var ShiYingPuStrs = [
    "&emsp;",
    "��",
    "Ӧ"
];
//������س��Ӧس����ͨ����װ��������
var ColorShiYingPu = [
    "black",
    "#000080",
    "#4B0082"
];


function PackShiYingPuColor(text, ix)
{
    var clr = "black";
    if( ix>=0 && ix <=2 )
    {
        clr = ColorShiYingPu[ix];
    }
    //
    var strResult =  "<span style=\"color: " + clr + "\">";
    strResult += text;
    strResult += "</span>";
    return strResult;
}
//����ȫ���Ե��Ű棬ֻ��Ҫ�ű���
function GetLiuYaoHTMLQuanJingGua(bzpp, lypp)
{
    //���̵�HTML�ַ���
    var strResult =  "<div align='left' style='line-height: 18pt; font-family: ����;'>"; 
    var strTemp = "";
    //�����б�ǿ�ʼ
    strResult += "<span style='white-space: nowrap;'>";
    //��ӡ����ռ�¡����Է�ʽ���Ա�����
    strTemp = "��ռ���飺" + lypp.strZhanShi + CheckLiuNianGua(lypp.strZhanShi) + "<br>";
    
    strResult += strTemp;
    strTemp = "���Է�ʽ��" +  lypp.strQiGuaFangShi + "<br>"
        + "�����Ա�" + GetBoldText( lypp.strGender ) + "��"
        + "������ݣ�" + lypp.strShengNian + "<br>";
    strResult += strTemp;
    //������ũ��ʱ��
    strResult += GetGGTimeStr(bzpp.JDBirth) + "<br>";
    strResult += GetNNTimeStr(bzpp.JDBirth) + "<br>";
    //������֧������ɷ
    var riGan = bzpp.iRiJZ % 10;
    var riZhi = bzpp.iRiJZ % 12;
    strTemp = "��ɷ�����ˡ�" + TGGuiRenStrs[riGan]
        + "�������" + DZYiMaStrs[riZhi%4]
        + "���һ���" + DZTaoHuaStrs[riZhi%4]
        + "����»��" + TGLuStrs[riGan] +  "<br>";
    strResult += strTemp;    
    //��֧��ʱ
    strTemp = "��֧��" + GetBoldText( GetBlueText( JiaZi[bzpp.iNianJZ] ) ) + "��"
        + SpaceEN2 + GetBoldText( GetFuchsiaText( JiaZi[bzpp.iYueJZ] ) ) + "��"
        + SpaceEN2 + GetBoldText( GetFuchsiaText( JiaZi[bzpp.iRiJZ] ) ) + "��"
        + SpaceEN2 + GetBoldText(  JiaZi[bzpp.iShiJZ] ) + "ʱ "
        +  GetBoldText( GetFuchsiaText( GetRiKongWang( bzpp.iRiJZ ) ))
        + "<br>" ;
    strResult += strTemp; 
    strResult += "<br>";
    ///////////////////////////
    //������
    strTemp = GetNSpace(9) 
        + GetBoldText( GetFuchsiaText(Get64GuaMing( lypp.bgIndex )))//������������س
        + GetNSpace(1) //����OX
        + "��" + Array64Gua[ lypp.bgIndex ][3] + "��"//��������
        + GetNSpace(1) + GetNSpace(1) //������Ӧ
    ;
    strResult += strTemp + "<br>";
    //���Թ�
    strTemp = "����" + GetNSpace(2) + "��"+ GetNSpace(1) + "��" + GetNSpace(2) 
        + "&emsp;" + BaGua[ Array64Gua[lypp.bgIndex][1] ] + "��" 
        + GongNeiBaGuaMingChen[ Array64Gua[lypp.bgIndex][2] ]  //����س
        + GetNSpace(1) //����OX
        + GetNSpace(5) //��������
        + GetNSpace(1) + GetNSpace(1) //������Ӧ
    ;   
    strResult += strTemp + "<br>";
    
    //������
    for(var i=5; i>=0; i--)
    {
        strTemp = LiuShenArray[ lypp.arrLiuShen[i] ] + GetNSpace(1) //����
            + lypp.FuShenStrs[i] + GetNSpace(1)  //����
            + PackMingAnColor( ShouGongYaoStrs[ lypp.arrShouGongYao[i] ], lypp.arrMingAnDong[i] )
            //���׸�֧���У�����Ӧ����ɫ
            +  PackShiYingPuColor( (LiuQinArray[ lypp.bgLiuQin[i] ] + TianGan[ lypp.bgTianGan[i] ] 
                + DiZhi[ lypp.bgDiZhi[i] ] + WuXing[ lypp.bgDZWX[i] ]
                + GetNSpace(1) + ShiYingPuStrs[ lypp.bgShiYingPu[i] ]) , lypp.bgShiYingPu[i])
        ;
        //׷��һ��
        strResult += strTemp + "<br>";
    }
    strResult += "<br>";
    strResult += "</span>"; //�����б�ǵ�ĩβ
    //��ӿ�����ʾ��Ϣ
    strResult += GetKanGuaTiShiInfo(bzpp, lypp);
    strResult += "<br>";
    //����ĩβ�ı�ǩ
    strResult += "<br></div>";
    //�滻���Ŀո���Ӧ�����ֻ����������
    strResult = strResult.replace(/&emsp;/g, "��");
    //����
    return strResult;
}

///////////////////////////////////////////////
//�Ӽ������Ժ���
//64��һ���������Թ�����
function Get64GuaHTML()
{
    var strRet = "";
    var strTemp = "";
    //�ɼ���ɡ���֧�����С�Ӧ����
    var curTianGan = new Array(6);
    var curDiZhi = new Array(6);
    var curDZWX = new Array(6);
    var curLiuQin = new Array(6);
    var curShiYingPu = new Array(6);
    //
    for(var k=1; k<=8; k++)//���ֲ���� Ǭһ�Ҷ������������忲����������
    {
        var gix = ShuZiChaBaGua[k]; //�Թ����
        //�Թ����У�Ϊ��
        var gWX = BaGuaWuXing[gix];
        //���β�ѯ���ڰ˸���
        for(var nix=0; nix<8; nix++)
        {
            //�����Թ���š�������Ų�ѯ64��������
            var ixAll = Find64IndexByGixAndNix(gix, nix);
            //���������ת��Ϊ��������
            var yy = Change64IndexToArray(ixAll);
            //���Ա��
            var shangGua = SanYaoToBaGuaIndex(yy[3], yy[4], yy[5]);
            //���Ա��
            var xiaGua = SanYaoToBaGuaIndex(yy[0], yy[1], yy[2]);
            //�ɼ���ɣ�����
            curTianGan[3] = NaJiaTianGan[shangGua][3];
            curTianGan[4] = NaJiaTianGan[shangGua][4];
            curTianGan[5] = NaJiaTianGan[shangGua][5];
            //�������
            curTianGan[0] = NaJiaTianGan[xiaGua][0];
            curTianGan[1] = NaJiaTianGan[xiaGua][1];
            curTianGan[2] = NaJiaTianGan[xiaGua][2];
            //�ɼ׵�֧������
            curDiZhi[3] = NaJiaDiZhi[shangGua][3];
            curDiZhi[4] = NaJiaDiZhi[shangGua][4];
            curDiZhi[5] = NaJiaDiZhi[shangGua][5];
            //��֧����
            curDiZhi[0] = NaJiaDiZhi[xiaGua][0];
            curDiZhi[1] = NaJiaDiZhi[xiaGua][1];
            curDiZhi[2] = NaJiaDiZhi[xiaGua][2];
            //��س��ţ�Ӧس���
            var shiYao = AnShiYao[nix];
            var yingYao = (shiYao+3)%6;
            //ѭ�������֧���С����ס���Ӧ��
            for(var j=0; j<6; j++)
            {
                curDZWX[j] = DiZhiChaWuXing[ curDiZhi[j] ]; //��֧������
                curLiuQin[j] = (curDZWX[j]+5 - gWX) % 5;    //����ֻ������
                curShiYingPu[j] = 0;//Ĭ�����㣬�Ȼ������س��Ӧس
            }
            //�����سλ����1��Ӧسλ����2
            curShiYingPu[shiYao] = 1;
            curShiYingPu[yingYao] = 2;
            
            //�������Թ���һ���ַ���
            strTemp = GetBoldText(GetFuchsiaText( Get64GuaMing(ixAll) ));
            strRet += strTemp + "<br>" ;
            //����һ�е��ַ���
            strTemp =  "&ensp;" + BaGua[gix] + "��" + GongNeiBaGuaMingChen[nix] + "&ensp;"//����س
                + GetNSpace(1) + "��" + Array64Gua[ixAll][3] +"��"  //�������׸�֧����
                + GetNSpace(2); //������Ӧ��
            strRet += strTemp + "<br>" ;
            //�����ַ��������ϵ��£�5��0
            for(var i=5; i>=0; i--)
            {
                strTemp = PackYinYangColor( ShouGongYaoStrs[ yy[i] ] , yy[i]) //����س
                    + PackShiYingPuColor(
                    LiuQinArray[ curLiuQin[i] ] + TianGan[ curTianGan[i] ] + DiZhi[ curDiZhi[i] ]
                    + WuXing[ curDZWX[i] ] + GetNSpace(1) + ShiYingPuStrs[ curShiYingPu[i] ],
                      curShiYingPu[i]  ) ;
                    strRet += strTemp + "<br>" ;
            }           
           
           //���ϸ��Ե�����
            strTemp = Array64GuaShiYi[ixAll];
            strRet += strTemp + "<br><br>" ;
        }
        //����ָ����ͻ���
        strRet += "<br><hr><br>";        
    }
    //����������˵����������˵��
    strTemp = "������ͳ��10�����˹����ԡ����������������׳��<br>" 
        + "������ͳ��8������ط񡢵���̩����ˮ����ˮ��ڣ���ɽ�á�ɽ���ڣ��׵�ԥ�����׸���"
    strRet += strTemp + "<br><br>" ;
    return strRet;
}

//�����Թ����gix���������nix���Ҷ�Ӧ���������
function Find64IndexByGixAndNix(gix, nix)
{
    var ixAll = 0;//����鲻����Ĭ�Ϸ���0
    //����������� Array64Gua��0����������1���ǹ���ţ�2���ǹ������
    for(var i=0; i<64; i++)
    {
        if( (Array64Gua[i][1] != gix) || (Array64Gua[i][2] != nix) )
        {
            continue;
        }
        else//��������ȣ��ҵ���
        {
            ixAll = i;
            break;
        }
    }    
    //����
    return ixAll;    
}

//����64������ţ����Ϊ����س�����飬���µ���װ��yy0 �� yy5
function Change64IndexToArray(ix)
{
    //����6��Ԫ�أ�����س��ֻ��0��1
    var yy = new Array(6);
    var vTemp = Number(ix);//��ʱ����
    //ѭ����ȡĩβ�Ķ����Ʊ���
    for(var i=0; i<6; i++)
    {
        yy[i] = vTemp % 2;
        vTemp = Math.floor( vTemp/2 );
    }
    return yy;//������������
}

//��ɫ������ɫ��
var ColorYinYang = [
    "#1E90FF",
    "red"
];
//��������س����ɫ
function PackYinYangColor(text, ix)
{
    var clr = "#1E90FF";
    if( ix>=0 && ix <=1 )
    {
        clr = ColorYinYang[ix];
    }
    //
    var strResult =  "<span style=\"color: " + clr + "\">";
    strResult += text;
    strResult += "</span>";
    return strResult;
}
