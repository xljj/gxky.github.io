//������������ʱ��� 1583 �� �� 3199 �꣬�������������һ�굽3200ǰһ�꣬3200���Ƿ�Ϊ���������

//////////////////////////////
//�����ϻ������Ϊ˫��Ԫ�񣬼���ͬ�����ˣ����Եļ������ӷ�
//��Χ 1�� �� 10��

//���    1��2
//ͬ����  7��8
//����    9��10

//������˳1λ�ӷ֡�������˳2λ�ӷ֡������� �ӷ֣����޿� ���֡�
var NaYinHeHunBiao  = 
[	    //���н� ¯�л� ����ľ ·���� ����� ɽͷ�� ����ˮ ��ǽ�� ������ ����ľ Ȫ��ˮ ������ ���׻� �ɰ�ľ ����ˮ ɳ�н� ɽ�»� ƽ��ľ ������ �𲭽� ���ƻ� ���ˮ ������ ���˽� ɣ��ľ ��Ϫˮ ɳ���� ���ϻ� ʯ��ľ ��ˮ
/*���н�*/ [7,     3,     3,     9,     7,     1,     9,     9,     7,     3,     9,     9,     1,     3,     8,     7,     1,     3,     9,     7,      1,     9,     9,     7,     3,    9,     9,     1,      3,     9],
/*¯�л�*/ [3,     7,     9,     9,     1,     7,     3,     9,     1,     9,     3,     9,     7,     9,     1,     1,     7,     9,     9,     1,      7,     1,     9,     1,     9,    3,     9,     7,      9,     3],
/*����ľ*/ [3,     9,     7,     3,     3,     9,     9,     1,     1,     7,     9,     1,     9,     7,     9,     1,     9,     7,     1,     1,      9,     9,     1,     1,     7,    9,     1,     9,      7,     9],
/*·����*/ [9,     9,     3,     7,     9,     9,     1,     7,     9,     1,     1,     7,     9,     1,     1,     9,     9,     1,     7,     9,      9,     1,     7,     9,     1,    1,     7,     9,      1,     1],
/*�����*/ [7,     1,     3,     9,     7,     3,     9,     9,     7,     1,     9,     9,     1,     1,     9,     7,     1,     1,     9,     7,      1,     9,     9,     7,     3,    9,     9,     1,      1,     9],
/*ɽͷ��*/ [1,     7,     9,     9,     3,     7,     3,     9,     1,     9,     1,     9,     7,     9,     1,     1,     7,     9,     9,     1,      7,     1,     9,     1,     9,    1,     9,     7,      9,     1],
/*����ˮ*/ [9,     3,     9,     1,     9,     3,     7,     3,     9,     9,     7,     1,     1,     9,     7,     9,     1,     9,     1,     9,      1,     7,     1,     9,     9,    7,     1,     1,      9,     7],
/*��ǽ��*/ [9,     9,     1,     7,     9,     9,     3,     7,     9,     3,     1,     7,     9,     1,     1,     9,     9,     1,     7,     9,      9,     1,     7,     9,     1,    1,     7,     9,      1,     1],
/*������*/ [7,     1,     1,     9,     7,     1,     9,     9,     7,     3,     9,     9,     1,     1,     9,     7,     1,     1,     9,     7,      1,     9,     9,     7,     3,    9,     9,     1,      1,     9],
/*����ľ*/ [3,     9,     7,     1,     1,     9,     9,     3,     3,     7,     9,     3,     9,     7,     9,     1,     9,     7,     1,     1,      9,     9,     1,     1,     7,    9,     1,     9,      7,     9],
/*Ȫ��ˮ*/ [9,     3,     9,     1,     9,     1,     7,     1,     9,     9,     7,     3,     3,     9,     7,     9,     1,     9,     1,     9,      1,     7,     1,     9,     9,    7,     1,     1,      9,     7],
/*������*/ [9,     9,     1,     7,     9,     9,     1,     7,     9,     3,     3,     7,     9,     3,     1,     9,     9,     1,     7,     9,      9,     1,     7,     9,     1,    1,     7,     9,      1,     1],
/*���׻�*/ [1,     7,     9,     9,     1,     7,     1,     9,     1,     9,     3,     9,     7,     9,     3,     1,     7,     9,     9,     1,      7,     1,     9,     1,     9,    1,     9,     7,      9,     1],
/*�ɰ�ľ*/ [3,     9,     7,     1,     1,     9,     9,     1,     1,     7,     9,     3,     9,     7,     9,     3,     9,     7,     1,     1,      9,     9,     1,     1,     7,    9,     1,     9,      7,     9],
/*����ˮ*/ [8,     1,     9,     1,     9,     1,     7,     1,     9,     9,     7,     1,     3,     9,     7,     9,     3,     9,     1,     9,      1,     7,     1,     8,     9,    7,     1,     1,      9,     7],

/*ɳ�н�*/ [7,     1,     1,     9,     7,     1,     9,     9,     7,     1,     9,     9,     1,     3,     9,     7,     3,     3,     9,     7,      1,     9,     9,     7,     3,    9,     9,     1,      1,     9],
/*ɽ�»�*/ [1,     7,     9,     9,     1,     7,     1,     9,     1,     9,     1,     9,     7,     9,     3,     3,     7,     9,     9,     1,      7,     1,     9,     1,     9,    1,     9,     7,      9,     1],
/*ƽ��ľ*/ [3,     9,     7,     1,     1,     9,     9,     1,     1,     7,     9,     1,     9,     7,     9,     3,     9,     7,     3,     3,      9,     9,     1,     1,     7,    9,     1,     9,      7,     9],
/*������*/ [9,     9,     1,     7,     9,     9,     1,     7,     9,     1,     1,     7,     9,     1,     1,     9,     9,     3,     7,     9,      9,     1,     7,     9,     1,    1,     7,     9,      1,     1],
/*�𲭽�*/ [7,     1,     1,     9,     7,     1,     9,     9,     7,     1,     9,     9,     1,     1,     9,     7,     1,     3,     9,     7,      3,     9,     9,     7,     3,    9,     9,     1,      1,     9],
/*���ƻ�*/ [1,     7,     9,     9,     1,     7,     1,     9,     1,     9,     1,     9,     7,     9,     1,     1,     7,     9,     9,     3,      7,     3,     9,     1,     9,    1,     9,     7,      9,     1],
/*���ˮ*/ [9,     1,     9,     1,     9,     1,     7,     1,     9,     9,     7,     1,     1,     9,     7,     9,     1,     9,     1,     9,      3,     7,     1,     9,     9,    7,     1,     1,      9,     7],
/*������*/ [9,     9,     1,     7,     9,     9,     1,     7,     9,     1,     1,     7,     9,     1,     1,     9,     9,     1,     7,     9,      9,     1,     7,     9,     3,    1,     7,     9,      1,     1],
/*���˽�*/ [7,     1,     1,     9,     7,     1,     9,     9,     7,     1,     9,     9,     1,     1,     8,     7,     1,     1,     9,     7,      1,     9,     9,     7,     3,    9,     9,     1,      1,     9],
/*ɣ��ľ*/ [3,     9,     7,     1,     3,     9,     9,     1,     3,     7,     9,     1,     9,     7,     9,     3,     9,     7,     1,     3,      9,     9,     3,     3,     7,    9,     3,     8,      7,     9],
/*��Ϫˮ*/ [9,     3,     9,     1,     9,     1,     7,     1,     9,     9,     7,     1,     1,     9,     7,     9,     1,     9,     1,     9,      1,     7,     1,     9,     9,    7,     3,     3,      9,     7],
/*ɳ����*/ [9,     9,     1,     7,     9,     9,     1,     7,     9,     1,     1,     7,     9,     1,     1,     9,     9,     1,     7,     9,      9,     1,     7,     9,     3,    3,     7,     9,      1,     1],
/*���ϻ�*/ [1,     7,     9,     9,     1,     7,     1,     9,     1,     9,     1,     9,     7,     9,     1,     1,     7,     9,     9,     1,      7,     1,     9,     1,     8,    3,     9,     7,      8,     3],
/*ʯ��ľ*/ [3,     9,     7,     1,     1,     9,     9,     1,     1,     7,     9,     1,     9,     7,     9,     1,     9,     7,     1,     1,      9,     9,     1,     1,     7,    9,     1,     8,      7,     9],
/*��ˮ*/ [9,     3,     9,     1,     9,     1,     7,     1,     9,     9,     7,     1,     1,     9,     7,     9,     1,     9,     1,     9,      1,     7,     1,     9,     9,    7,     1,     3,      9,     7]
];

//���㵥���ϻ飬�����������������
function GetDanZhuHeHun(jzNan, jzNv)
{
    //�Ƿ�ͬ����
    var isYiXing;
    if( (jzNan%2) != (jzNv%2) )//ģ2��ͬ
    {
        isYiXing = 1; //���������мӷ�
    }
    else
    {
        isYiXing = 0; //ͬ����
    }
    //������ţ���30��
    var nyNan = Math.floor(jzNan / 2);
    var nyNv = Math.floor( jzNv / 2 );
    //�������
    var score = NaYinHeHunBiao[nyNan][nyNv] + isYiXing;
    return score;
}

/////////////////////////////////////////////
//�������������̣����� bzpp ����
//���ּ����Ķ���ʱ�䶼��������
//bzpp.JDBirth ��ͨ����ʱ��
//bzpp.JDBirthZTY ����ʱ����̫��ʱ
//bzpp.Gender  �Ա��л�Ů
//bzpp.JingDuBirth  �����ؾ���
//bzpp.IsUseZTY       ʹ����̫��ʱ����

//bzpp.iNianJZ  //���������������
//bzpp.iYueJZ  //���������������
//bzpp.iRiJZ  //���������������
//bzpp.iShiJZ  //����ʱ���������

//bzpp.iTaiYuan ̥Ԫ
//bzpp.iMingGong ����

//bzpp.JQMing0  //ǰһ����������
//bzpp.JQJD0    //ǰһ������������
//bzpp.JQMing1  //��һ����������
//bzpp.JQJD1    //��һ������������
//bzpp.DaYunJD  //�������˵�������
//bzpp.isNiDaYun //�Ƿ������������
function GetGaoJiBaZiJianPai(bzpp)   //��ȡ�߼����ּ���
{
    //�ַ���
    var strResult = "";
    var strTemp = "";
    var birthJD = bzpp.JDBirth; //������̫��
    //ʱ��
    var myDD = JD.DD(birthJD);
    if( bzpp.Gender == "Ů" )
    {
        strTemp = "Ů�����Ӹ߼����̣�<br>";
    }
    else
    {
        strTemp = "�������Ӹ߼����̣�<br>";
    }
    strResult += strTemp;
    //����ʱ��
    strTemp = "����������" + String(myDD.Y) + "��"
        + String(myDD.M) + "��"
        + String(myDD.D) + "��"
        + String(myDD.h) + "ʱ"
        + String(myDD.m) + "�֣�"
        +  WeekDays[ GetiDayOfWeek(birthJD) ]  ;
    //����Ф
    strTemp += "�� ����Ф��<b>" + DZShengXiao[bzpp.iNianJZ%12] + "</b>";
    strResult += strTemp;
    strResult += "<br>";
    //ũ��
    //����ũ����0���ǽ������ʱ��23������������ʱ��Ҫ����
    var theOB;
    if(myDD.h >= 23)//ũ��ʱ�䣬23�������һ��
    {
        theOB = GetJDtoNongLiOB(birthJD + 1);
    }
    else
    {
        theOB = GetJDtoNongLiOB(birthJD);
    }
    strTemp = "����ũ����" + theOB.Lyear3 + "�� "
              + theOB.Lleap + theOB.Lmc + "�� "
              + theOB.Ldc + "�� "
              + DiZhi[ (Math.floor((myDD.h+1)/2 )) % 12 ] + "ʱ"
              + " ���Ƶ�" + String( theOB.Lyear0 + 1984 + 2698 + 56 ) + "�꣩";//�Ƶۼ�������϶�56��
    //console.log( myDD.h );
    strResult += strTemp;
    strResult += "<br>";
    strResult += "<br>";
    //����    
    if( "Ů" ==  bzpp.Gender)
    {
        strTemp = "����" + SpaceEN2;
        strTemp += GetBoldText(GetFuchsiaText(JiaZi[bzpp.iNianJZ])) + SpaceEN2 + SpaceEN2 + SpaceEN2
        +  GetBoldText(GetFuchsiaText(JiaZi[bzpp.iYueJZ]))  + SpaceEN2 + SpaceEN2 + SpaceEN2
        +  GetBoldText(GetFuchsiaText(JiaZi[bzpp.iRiJZ]))  + SpaceEN2 + SpaceEN2 + SpaceEN2
        +  GetBoldText(GetFuchsiaText(JiaZi[bzpp.iShiJZ])) ;
    }
    else
    {
        strTemp = "Ǭ��" + SpaceEN2;
        strTemp += GetBoldText(GetBlueText(JiaZi[bzpp.iNianJZ])) + SpaceEN2 + SpaceEN2 + SpaceEN2
        + GetBoldText(GetBlueText(JiaZi[bzpp.iYueJZ])) + SpaceEN2 + SpaceEN2 + SpaceEN2
        + GetBoldText(GetBlueText(JiaZi[bzpp.iRiJZ])) + SpaceEN2 + SpaceEN2 + SpaceEN2
        + GetBoldText(GetBlueText(JiaZi[bzpp.iShiJZ])) ;
    }
    strTemp += SpaceEN2 + GetRiKongWang( bzpp.iRiJZ );
    strResult += strTemp;
    strResult += "<br>";
    //��֧�ظ�
    strTemp = "�ظ�" + SpaceEN2;
    strTemp +=  SpaceEN2 + GetDiZhiCangGan( bzpp.iNianJZ % 12) + SpaceEN2
        + SpaceEN2 + GetDiZhiCangGan( bzpp.iYueJZ % 12) + SpaceEN2
        + SpaceEN2 + GetDiZhiCangGan( bzpp.iRiJZ % 12) + SpaceEN2
        + SpaceEN2 + GetDiZhiCangGan( bzpp.iShiJZ % 12);
    strResult += strTemp;
    strResult += "<br>";
    //����
    strTemp = "����" + SpaceEN2;
    strTemp +=  GetBlackText( NaYin[bzpp.iNianJZ] ) + SpaceEN2 + SpaceEN2
    +  GetBlackText( NaYin[bzpp.iYueJZ] ) + SpaceEN2 + SpaceEN2
    +  GetBlackText( NaYin[bzpp.iRiJZ] ) + SpaceEN2 + SpaceEN2
    +  GetBlackText( NaYin[bzpp.iShiJZ] ) ;
    strResult += strTemp;
    strResult += "<br>";
    strResult += "<br>";
    //���˼���
    //�������˼������
    var iQiYunJZ;
    var iYunDelta = 0;  //����˳���� +1�������� -1
    if( 0 == bzpp.isNiDaYun )//˳��
    {
        iQiYunJZ = (bzpp.iYueJZ + 1 + 60) % 60;
        iYunDelta = 1;
    }
    else//����
    {
        iQiYunJZ = (bzpp.iYueJZ - 1 + 60) % 60;
        iYunDelta = -1;
    }
    //���깫���ꡢ���������
    var qiyunGLNian = myDD.Y ;
    //var iQiYunGLNianJZ = GetNianJiaZiShu(qiyunGLNian);
    //��ʼ�Ŵ���
    var strDaYunJiaZi = "����" + SpaceEN2;
    var strDaYunNaYin = "����" + SpaceEN2 ;
    var strDaYunZhouSui = "����" + SpaceEN2 + SpaceEN2;
    var strDaYunQiNian = "����" + SpaceEN2 ;
    //var strDaYunZhiNian = "ֹ��" + SpaceEN2 ;
    var arrayDaYunJiaZi = new Array(8); //�˲����˵ļ�������5��ѭ��
    for(var i=0; i<8; i++)//���������Ϣ�ַ���
    {
        //5 �� ����ѭ����12�껻����
        arrayDaYunJiaZi[i] = (iQiYunJZ + (i%5)*iYunDelta + 60) % 60;
        strDaYunJiaZi += JiaZi[ arrayDaYunJiaZi[i] ] + SpaceEN2 + SpaceEN2;
        strDaYunNaYin += NaYin[ arrayDaYunJiaZi[i] ] + SpaceEN2;
        strDaYunZhouSui += PackSmallNumber(String( 0 + i * 12)) + SpaceEN2 + SpaceEN2 + SpaceEN2;
        strDaYunQiNian += PackSmallNumber(String( qiyunGLNian + i * 12)) + SpaceEN2 + SpaceEN2;
        //strDaYunZhiNian += PackSmallNumber(String( qiyunGLNian + 11 + i * 12)) + SpaceEN2 + SpaceEN2;
    }
    //��ӵ������
    strResult += GetRedText(strDaYunJiaZi) + "<br>" ;
    strResult += strDaYunNaYin + "<br>" ;
    strResult += strDaYunZhouSui + "<br>" ;
    strResult += strDaYunQiNian + "<br>" ;
    //
    return strResult;
}

//������Ů���ֺϻ���ַ���
function GetHeHunHTML(bzppNan, bzppNv, bDraw, syCanvas)//���̲�����̫��
{
    //����ַ���
    var strResult =  "<div align='left' style='font-family: ����;'>"; 
    var strTemp = "";
    //�����б�ǿ�ʼ
    strResult += "<span style='white-space: nowrap;'>";
    //������Ϣ
    strResult += GetGaoJiBaZiJianPai(bzppNan); 
    strResult += "<br>";
    
    //Ů����Ϣ
    strResult += GetGaoJiBaZiJianPai(bzppNv); 
    strResult += "<br>";
    
    strResult += "</span>"; //�����б�ǵ�ĩβ
    //����ϻ����
    var scoreAll = GetYuanJuHeHunScore(bzppNan, bzppNv);
    scoreAll += 1;  //������101
    //alert( scoreAll );
    strResult += GetSkyBlueText("******************************<br>");
    //��ʾ����    
    strTemp = "����ƥ��ȣ�"  + String(scoreAll)
             + SpaceEN2 + SpaceEN2
             + ArrayScoreResult[ Math.floor( scoreAll/17.0 ) ];
    strResult +=  GetBoldText( GetBlueText(strTemp) );
     strResult += "<br>";    
    
    //��������ƥ��ָ��
    var ysHeHun = CalcYunShiHeHunObject(bzppNan, bzppNv);
    ysHeHun.score += 1; //������101
    strTemp = "����ƥ��ȣ�" + String( ysHeHun.score )
            + SpaceEN2 + SpaceEN2
            + ArrayScoreResult[ Math.floor( ysHeHun.score/17.0 ) ];
    strResult +=  GetBoldText( GetBlueText(strTemp) );
    strResult += "<br>";
    //����ԭ�侲̬�����ƶ�̬�ۺϷ�
    //ԭ��ռ101�֣�����ռ 101 �֣��ۺϳ���2
    var scoreFinal = (scoreAll + ysHeHun.score ) / 2;
    scoreFinal = Math.floor( scoreFinal + 0.5 );
    strTemp = "�����ۺϷ֣�" + String( scoreFinal )
            + SpaceEN2 + SpaceEN2
            + ArrayScoreResult[ Math.floor( scoreFinal/17.0 ) ];
    strResult +=  GetBoldText( GetRedText(strTemp) );
    strResult += "<br>";  
//    //β��
    strResult += GetSkyBlueText("******************************");
    strResult += "<br>";  
    //�ϻ�����
    var hhid = Math.floor( scoreFinal/17.0 );
    strResult += ArrayHeHunResult[hhid];
    strResult += "<br>";
    //�����ж�
    if( Math.abs( bzppNan.JDBirth - bzppNv.JDBirth ) > 365*59 )
    {
        //������60��
        strResult += GetBoldText( GetRedText("˫��������̫�󣬲�Ҫ���ң�") );
        strResult += "<br>";
    };
    ///////////////////////////////////////////////
    ////����    
    
    strResult += "<br>";
    strResult += "<b>�ϻ���ʾ��</b><br><ul>";
    
    //�ϻ����� * �����
    if( scoreAll <= 6)//������ͬ�� 4�ֵ�5��
    {
        strResult += "<li>������������ȫ��ͬ����Ե��</li>" ;
    }
    else
    {
        //�����ϻ飬�õĲ��黵���飬��������ģ�������������ԭ�������ϻ�
        strResult += GetHeHunHints(bzppNan, bzppNv, scoreAll);
        //����ƥ��ĵͷ������� GetHeHunHints �����Ѿ��жϹ���
        //�ж�����ƥ��
        if(  ysHeHun.score < 40 ) //���ƺϻ�С��40��ƫ������
        {
            strResult += "<li>����ƥ��ƫ�ͣ�˫���ڹ�����ҵ�����ʽ���ּ����Ϊ�˴����ȷ�����ܴ��ڷ��磬" 
                    + "�����ദʱ��䳤������ì�ܣ���Ҫע��Э�����⣬����Ƣ��������</li>";
        } 
        //ͷ̥Ԥ��
        strResult += "<li>ͷ̥Ԥ��������ɻ飬������Ů˫������ʱ�䶼�ǳ���ȷ��ͷ̥����"
                + GetTouTaiString(bzppNan, bzppNv)
                + "����<b>ֻ��50%׼ȷ�ʣ��������֣������档</b>��</li>";
    }
    strResult += "</ul>";
    ////////////////
    strResult += "<b>������Ϣ��</b><br><ul>";
    strResult += GetMingJuInfo(bzppNan);
    strResult += "</ul>";
    ////////////////
    strResult += "<b>Ů����Ϣ��</b><br><ul>";
    strResult += GetMingJuInfo(bzppNv);
    strResult += "</ul>";
    //����ĩβ�ı�ǩ
    strResult += "</div>";
    //�滻���Ŀո���Ӧ�����ֻ����������
    strResult = strResult.replace(/&emsp;/g, "��");
    
     //��ͼ
    var painter = syCanvas.getContext("2d");
    //console.log(painter);
    if( (1==bDraw) && painter ) //�ж��Ƿ��ͼ�����޻���
    {
        syCanvas.width = 640;   //���󻭲�
        syCanvas.height = 600;
        //�����ƺϻ�ͼ
        DrawYunShiHeHun(ysHeHun, painter);
    }
    
    //����
    return strResult;
}
// (����+1 / 17) ��Ϊ6������
// 0, 17, 34, 51, 68, 85, 101
//�����ϻ�����
var ArrayHeHunResult  = 
[	// 0
	"<b>����ˮ�£�</b>��Ե�ܲ�����п�������������ϧ��",
	// 17
	"<b>�鳤Ե�̣�</b>��Ե�ϲ�ɻ������󣬻����ͥì�ܣ�ע����͡�",
	// 34
	"<b>ϲ�ǲΰ룺</b>��Ե���ѣ��ɻ�������������м�ͥì�ܣ�ע����͡�",
	// 51
	"<b>�ؽ�֮�ã�</b>��Ե�пɣ��ʺ�һ�����˫��ֻҪ����ݡ����Σ��ҵ����Կ�����",
	// 68
	"<b>��ɪ������</b>��Ե�ܺã���ٳ������޸���ã���ͥ�ȽϺ�����",
	// 85
	"<b>�������죺</b>ʮ����ǣ��������Ե�����޸���ǳ��ã���ͥ������",
	// 101
	"<b>�������죺</b>ʮ����ǣ��������Ե�����޸���ǳ��ã���ͥ������"
];
// (����+1 / 17) ��Ϊ6������
// 0, 17, 34, 51, 68, 85, 101
//��̷�ֵ����
var ArrayScoreResult = 
[    
    "�ܲ�", // 0
    "�ϲ�", // 17
    "����", // 34
    "ƽ��", // 51
    "�ϼ�", // 68
    "����",  //85
    "����"   //101
];

//����ԭ�ֺϻ���� 0 �� 100 ��
function GetYuanJuHeHunScore(bzppNan, bzppNv)
{
    //����
    var scNian = GetDanZhuHeHun(bzppNan.iNianJZ, bzppNv.iNianJZ);
    //����
    var scYue = GetDanZhuHeHun(bzppNan.iYueJZ, bzppNv.iYueJZ);
    //����
    var scRi = GetDanZhuHeHun(bzppNan.iRiJZ, bzppNv.iRiJZ);
    //ʱ��
    var scShi = GetDanZhuHeHun(bzppNan.iShiJZ, bzppNv.iShiJZ);
    //����ϻ�ָ��
    var scoreAll = 0;
    var fourSame = 0;    //������ͬ
    //�ж������������Ƿ��в�һ���ļ�����
    if( (bzppNan.iNianJZ != bzppNv.iNianJZ)
        || (bzppNan.iRiJZ != bzppNv.iRiJZ) )
    {
        //�����������в�ͬ�ģ����������ϻ�
        scoreAll = scNian * 4 + scYue * 1 + scRi * 6 + scShi * 1;
    }
    else
    {
        //������������ͬ
        //���������ͬ�������¡�ʱ�ϻ�
        if( bzppNan.iYueJZ != bzppNv.iYueJZ )
        {
            scoreAll = scYue * 4 + scShi * 6;   //��4�ɣ�ʱ6��
        }
        else
        {
            //�ꡢ�¡��ն���ͬ
            if( bzppNan.iShiJZ != bzppNv.iShiJZ )//���ʱ����ͬ������ʱ���ϻ�
            {
                scoreAll = scShi * 10;  //ʱ��
            }
            else
            {
                //��������������ͬ����Ե
                fourSame = 1;
                scoreAll = 4;
            }//end ʱ���ж�
        }//end �����ж�
    }//end �����ж�
    
    //�������ɺϡ�֧�ϡ���֧�������ϼӷ֣�4�֡�4�֡�3��
    var riganNan = bzppNan.iRiJZ % 10;
    var riganNv = bzppNv.iRiJZ % 10;
    if( (riganNan + 5)%10 == riganNv )
    {
        scoreAll += 4;
        //alert("�ո���ϡ�");
    }
    //�غ�
    var rizhiNan = bzppNan.iRiJZ % 12;
    var rizhiNv = bzppNv.iRiJZ % 12;
    if( rizhiNv == DZLiuHe[rizhiNan] )
    {
        scoreAll += 4;
        //alert("��֧���ϡ�");
    }
    //��֧����
    var dzbqNan = DiZhiCangGan[rizhiNan][0];
    var dzbqNv = DiZhiCangGan[rizhiNv][0];
    if( (dzbqNan+5)%10 == dzbqNv )
    {
        scoreAll += 3;
        //alert("��֧�������ϡ�");
    }
    //���ҳ�����������������Է���������������� + 5������� -5
    //�з������������С�������������
    var nanNianWX = NaYinWuXing[ Math.floor( bzppNan.iNianJZ/2 ) ];
    var nanRiWX = NaYinWuXing[ Math.floor( bzppNan.iRiJZ/2 ) ];
    //Ů���������к���������
    var nvNianWX = NaYinWuXing[ Math.floor( bzppNv.iNianJZ/2 ) ];
    var nvRiWX = NaYinWuXing[ Math.floor( bzppNv.iRiJZ/2 ) ];
    //���ҳ���Ԥ�У�����
    if( (nanNianWX+2)%5 == nvRiWX
         || (nanNianWX+3)%5 == nvRiWX ) //��
    {
        scoreAll -= 5;
        //alert("��������Ů����������");
    }
    else if( (nanNianWX+1)%5 == nvRiWX
         || (nanNianWX+4)%5 == nvRiWX ) //��
    {
        scoreAll += 5;
        //alert("��������Ů����������");
    };
    if( (nvNianWX+2)%5 == nanRiWX
         || (nvNianWX+3)%5 == nanRiWX )//��
    {
        scoreAll -= 5;
        //alert("Ů������������������");
    }
    else if( (nvNianWX+1)%5 == nanRiWX
         || (nvNianWX+4)%5 == nanRiWX )//��
    {
        scoreAll += 5;
        //alert("Ů������������������");
    }; 
    
    //����120
    if( scoreAll > 120 )
    {
        scoreAll = 120;
    };
    //�ϻ����Ϊ�ٷ���
    scoreAll = scoreAll * 100 / 120.0 ;
    scoreAll = Math.floor( scoreAll + 0.5 ) ;
    //���� 10
    if( scoreAll < 10 )
    {
        scoreAll = 10;
    }    
    //������ȫ��ͬ����Ե��д��4�����ڷ���ֵ�ж�
    if( 1 == fourSame )
    {
        scoreAll = 4;
    }
    //����
    return scoreAll;
}

//////////////////////////////////
//ysHeHun.score     �ۺϼ�Ȩ��
//ysHeHun.scoreAVG     ����ƥ��60��ƽ����
//ysHeHun.startYear ������ݣ�������60�����ƺϻ�
//ysHeHun.nanArray[60]  ������ݿ�ʼ��60������Ԫ���ֵ
//ysHeHun.nvArray[60]   ������ݿ�ʼ��60��Ů��Ԫ���ֵ
//ysHeHun.tongArray[60] ������ݿ�ʼ��������ͬ��������abs����
//ysHeHun.chaArray[60]  ������ݿ�ʼ�����˲�ֵ��������abs����
//ysHeHun.nanYS   ����Ԫ���ֵ
//ysHeHun.nvYS    Ů��Ԫ���ֵ
//�������ƺϻ�
function CalcYunShiHeHunObject(bzppNan, bzppNv)
{
    var ysHeHun = new Object();
    ysHeHun.score = 0;  //��Ȩ�ۺϷ�
    ysHeHun.scoreAVG = 0;
    ysHeHun.startYear = 0;
    ysHeHun.nanArray = new Array(60);
    ysHeHun.nvArray = new Array(60);
    ysHeHun.tongArray = new Array(60);
    ysHeHun.chaArray = new Array(60);
    ysHeHun.nanYS = 0;
    ysHeHun.nvYS = 0;
    //�з�����ʱ��
    var nanDD = JD.DD( bzppNan.JDBirth );
    var nanBirthYear = nanDD.Y; //�з�����
    //Ů������ʱ��
    var nvDD = JD.DD( bzppNv.JDBirth );
    var nvBirthYear = nvDD.Y;   //Ů������

    //�ж�˭�����С���ӳ�����ݴ�����С����20���꿪ʼ�������ƺϻ�ָ��
    //����С�� 20�굽80�꣬60��ʱ��
    if( nanBirthYear <= nvBirthYear )
    {
        ysHeHun.startYear = nvBirthYear + 20;  //�з��ȳ�������Ů��20�꿪ʼ
    }
    else
    {
        ysHeHun.startYear = nanBirthYear + 20; //Ů���ȳ��������з�20�꿪ʼ
    }
    //�з�Ԫ���ֵ����
    var nanYuanShen = CalcYuanShenQiangDuObject(bzppNan);
    //Ů��Ԫ���ֵ����
    var nvYuanShen = CalcYuanShenQiangDuObject(bzppNv);
    //��������Ԫ���ֵ
    ysHeHun.nanYS = nanYuanShen.yuanshen;
    ysHeHun.nvYS = nvYuanShen.yuanshen;
    //����60��
    var sumTong = 0;    //ͬ���ֵ����
    var sumCha = 0;     //����ֵ����
    ////////////////////////////////////
    //Ԫ���ֵ 10 �� 100�����˶���Ӱ����� +-20 �� +-40
    //����Ӱ��̶�
    var multiNan = 20 + ((100-nanYuanShen.yuanshen)/90.0) * 20;
    //���㱶�� +-5 �Ŵ� +-40
    multiNan = 2 * multiNan / 10.0;    //���˴����+-5���ƣ��������ʱ���Ա��ʣ��õ�ʵ��Ӱ�����
    //Ů����
    var multiNv = 20 + ((100-nvYuanShen.yuanshen)/90.0) * 20;
    //���㱶�� +-5 �Ŵ� +-40
    multiNv = 2 * multiNv / 10.0;    //���˴����+-5���ƣ��������ʱ���Ա��ʣ��õ�ʵ��Ӱ�����
    //��ʼ����
    for(var i=0; i<60; i++)
    {
        //��ǰ��ݵ�����
        var curYear = ysHeHun.startYear + i;
        //��ǰ��ݼ���
        var curYearJZ = GetNianJiaZiShu(curYear);
        
        //�з����˼�����
        var nanDYJZ = GetGaoJiDaYunJZ( curYear, nanBirthYear, 
            bzppNan.iYueJZ, bzppNan.isNiDaYun );
        //Ů�����˼�����
        var nvDYJZ = GetGaoJiDaYunJZ( curYear, nvBirthYear,
            bzppNv.iYueJZ, bzppNv.isNiDaYun );
        //��ǰ�з�Ԫ���ֵ
        var curNan = nanYuanShen.yuanshen + 
                multiNan * ( 0.7* GetSuiYunDanYS(nanDYJZ, bzppNan.iRiJZ) + 0.3* GetSuiYunDanYS(curYearJZ, bzppNan.iRiJZ) );
        curNan = Math.floor( curNan+0.5 );   //��������
        //��ǰŮ��Ԫ���ֵ
        var curNv = nvYuanShen.yuanshen +
                multiNv * ( 0.7* GetSuiYunDanYS(nvDYJZ, bzppNv.iRiJZ) + 0.3 * GetSuiYunDanYS(curYearJZ, bzppNv.iRiJZ) );
        curNv = Math.floor( curNv+0.5 );   //��������
        ///////////////////////////////
        //�޶�Ԫ���ֵ�� -30 �� 120
        if( curNan > 120 ) curNan = 120;
        if( curNan < -30 ) curNan = -30;
        if( curNv > 120 ) curNv = 120;
        if( curNv < -30 ) curNv = -30;
        //���浽����
        ysHeHun.nanArray[i] = curNan;
        ysHeHun.nvArray[i] = curNv;
        //���㵱ǰ����ָͬ���Ͳ�ֵָ��
        var curTong = 0;
        var curCha = 0;
        //�ж�����
        if( (curNan>=0) && (curNv>=0) )//��������
        {
            curTong = Math.min( curNan, curNv );    //��С������ͬ
            curCha = Math.abs( curNan - curNv );    //��ֵ
        }
        else if(  (curNan<0) && (curNv<0)  ) //���Ǹ���
        {
            curTong =  Math.abs(Math.max( curNan, curNv )); //�ϴ������������������
            curCha = Math.abs( curNan - curNv );    //��ֵ            
        }
        else//һ��������һ������
        {
            curTong = 0;    //����֮��û��ͬ����
            curCha = Math.abs( curNan - curNv );    //��ֵ   
        }
        //���浽����
        ysHeHun.tongArray[i] = curTong;
        ysHeHun.chaArray[i] = curCha;
        //���
        sumTong += curTong;
        sumCha += curCha;
        //������ϣ�������һ��
        //console.log( "���� " + JiaZi[curYearJZ] + " ���� " + JiaZi[nanDYJZ] + " Ů�� " + JiaZi[nvDYJZ]);
    }//end for
    
    //������ͣ�����������ⶼС��1�������1����ֹ��0���������
    if( sumTong < 1 )
    {
        sumTong = 1;
    }
    if( sumCha < 1 )
    {
        sumCha = 1;
    }
    //�������ƺϻ�ƽ��ֵ 0 �� 100 ��
    var sc = 100.0 * sumTong / ( sumTong + sumCha );
    ysHeHun.scoreAVG = Math.floor( sc + 0.5 );    
    //�����Ȩƥ���
    ysHeHun.score = CalcJiaQuanYunShiScore(ysHeHun.tongArray, ysHeHun.chaArray);
    //���ض���
    return ysHeHun;
}

//���ݵ�ǰ���꣬�������꣬�����������ӡ�����˳�棬�����ǰ�Ĵ��˼�����
function GetGaoJiDaYunJZ(curYear, birthYear, iYueJZ, isNiDaYun)
{
    //��ݲ�ֵ
    var delta = curYear - birthYear;
    //���˲���
    var steps = Math.floor(delta/12);
    steps = steps%5;
    //���㵱ǰ�����Ӧ�Ĵ���
    var curDaYunJZ = 0;
    if( 0 == isNiDaYun )//˳��
    {
        curDaYunJZ = (iYueJZ + 1 + steps)%60;
    }
    else//�����
    {
        curDaYunJZ = (iYueJZ - 1 - steps + 60)%60;
    }
    //����
    return curDaYunJZ;
}
//////////////////////////////////
//ysHeHun.score     �ۺ����Ʒ���
//ysHeHun.startYear ������ݣ�������60�����ƺϻ�
//ysHeHun.nanArray[60]  ������ݿ�ʼ��60������Ԫ���ֵ
//ysHeHun.nvArray[60]   ������ݿ�ʼ��60��Ů��Ԫ���ֵ
//ysHeHun.tongArray[60] ������ݿ�ʼ��������ͬ��������abs����
//ysHeHun.chaArray[60]  ������ݿ�ʼ�����˲�ֵ��������abs����
//ysHeHun.nanYS   ����Ԫ���ֵ
//ysHeHun.nvYS    Ů��Ԫ���ֵ
//�������ƺϻ���󡢻��������л���
function DrawYunShiHeHun(ysHeHun, painter)
{
    //�ߴ�
    var Width = 640;
    var Height = 600;
    //����ԭ��
    var originX = 40;//40+ 100��*6����
    var originY = 480;//���� 120��*4����
    //����
    var xStep = 10; //60���*10����
    var yStep = 4;
    //��ͬ������ɫ
    var colorTong = "#00FA9A";    //��ɫ
    //��ֵ������ɫ
    var colorCha  = "#FFC0CB";    //��ɫ
    //����������ɫ
    var colorNan = "blue";      //��ɫ
    //Ů��������ɫ
    var colorNv = "fuchsia";    //�Ϻ�
    ////////////////////////////////////////////
    //���˻�ͼ
    painter.beginPath();
    painter.strokeStyle = "#FF4500" ;//�Ⱥ�ɫ
    //��60��
    for(var i=0; i<60; i++)
    {
        var curNan = ysHeHun.nanArray[i];
        var curNv = ysHeHun.nvArray[i];
        var curTong = ysHeHun.tongArray[i]; 
        var curCha  = ysHeHun.chaArray[i];
        //�����������
        if( curNan>=0 && curNv>=0 )
        {
            //����ͬ����ľ���
            painter.fillStyle = colorTong;
            painter.fillRect(originX + i*xStep, (120-curTong)*yStep, xStep, curTong*yStep );
            //������εľ��ο�
            painter.fillStyle = colorCha;
            painter.fillRect(originX + i*xStep, (120-curTong-curCha)*yStep, xStep, curCha*yStep ); 
            painter.strokeRect(originX + i*xStep, (120-curTong-curCha)*yStep, xStep, curCha*yStep );       
        }
        else if( curNan<0 && curNv<0 )
        {
            //���Ǹ���
            //��ͬ����
            painter.fillStyle = colorTong;
            painter.fillRect(originX + i*xStep, originY, xStep, curTong*yStep );
            //������εľ��ο�
            painter.fillStyle = colorCha;
            painter.fillRect(originX + i*xStep, originY + curTong*yStep, xStep, curCha*yStep );
            painter.strokeRect(originX + i*xStep, originY + curTong*yStep, xStep, curCha*yStep );
        }
        else
        {
            //һ��������һ������
            //ֻ�в���Ļ����Ӵ�ķ�ֵ���»�
            var curMax = Math.max( curNan, curNv );
            //����ֵ���䣬������εľ��ο�
            painter.fillStyle = colorCha;
            painter.fillRect(originX + i*xStep, (120-curMax)*yStep, xStep, curCha*yStep );
            painter.strokeRect(originX + i*xStep, (120-curMax)*yStep, xStep, curCha*yStep );
        }
    }//end for
    //����
    painter.stroke();
    //������Ԫ������
    painter.beginPath();
    painter.lineWidth = 3;
    painter.strokeStyle = colorNan; //����
    for(var i=1; i<60; i++)
    {            
        painter.moveTo( originX+ i*xStep - xStep/2, (120 - ysHeHun.nanArray[i-1])*yStep );
        painter.lineTo( originX+ i*xStep + xStep/2, (120 - ysHeHun.nanArray[i])*yStep );
    }
    painter.stroke();
    //Ů��Ԫ������
    painter.beginPath();
    painter.lineWidth = 3;
    painter.strokeStyle = colorNv; 
    for(var i=1; i<60; i++)
    {
        painter.moveTo( originX+ i*xStep - xStep/2, (120 - ysHeHun.nvArray[i-1])*yStep );
        painter.lineTo( originX+ i*xStep + xStep/2, (120 - ysHeHun.nvArray[i])*yStep );
    }    
    painter.stroke();
    //////////////////////////////////////////////
    //��������Ϳ̶�
    painter.beginPath();
    painter.lineWidth = 3;
    painter.strokeStyle = "black";
    painter.fillStyle = "black";
    painter.moveTo(0, originY);
    painter.lineTo(Width, originY);
    painter.moveTo(1, 0);
    painter.lineTo(1, Height);
    //Y��̶�
    for(var k=0; k<=150; k+=10)//-30�ֵ�120�֣���150��
    {
        painter.moveTo(0, k*yStep);
        painter.lineTo(10, k*yStep);
        //������
        painter.fillText( String(120 - k), 14, k*yStep);
    }
    //X��̶�
    for(var k=0; k<=60; k+=10)
    {
        painter.moveTo( originX + k*xStep, originY );
        painter.lineTo( originX + k*xStep, originY + 12 );
        //������
        painter.fillText( String( k+ysHeHun.startYear ), originX + k*xStep, originY + 24 );
    }    
    //ͼ��������
    painter.fillText("����ƥ��ͼ��Ե��Եǳ����ͬ���죩", Width/2 -100, Height - 12);
    //����·��  
    painter.stroke();
    
    //��С�̶�
    painter.beginPath();
    painter.lineWidth = 1;
    for(var k=0; k<=60; k+=1)
    {
        painter.moveTo( originX + k*xStep, originY );
        painter.lineTo( originX + k*xStep, originY + 6 );
    }
    painter.stroke();
    //�߿�
    painter.lineWidth = 1;
    painter.strokeStyle = "green";
    painter.strokeRect(0,0,Width,Height);
}

////////////////////////////////////////////////////
//�ϻ�����
//�������������̶���Ů�����̶���ԭ�������ϻ����
function GetHeHunHints(bzppNan, bzppNv, scoreYuanJu)
{
    var strRet = "";
    //�����������к���������
    var nanNianWX = NaYinWuXing[ Math.floor(bzppNan.iNianJZ/2) ];
    var nanRiWX = NaYinWuXing[ Math.floor(bzppNan.iRiJZ/2) ];
    //Ů���������к���������
    var nvNianWX = NaYinWuXing[ Math.floor(bzppNv.iNianJZ/2) ];
    var nvRiWX = NaYinWuXing[ Math.floor(bzppNv.iRiJZ/2) ];
    
    //˫��������ϵ
    if( (nanNianWX+2)%5 ==  nvNianWX
            || (nanNianWX+3)%5 ==  nvNianWX )
    {
        strRet += "<li>˫���ҳ����ܶԻ��²�̫���⣬�ڼ�������������������ϰ�׵ȷ��������飬��Ҫע�⴦��ì�ܡ�</li>";
    };
    //˫��������ϵ
     if( (nanRiWX+2)%5 ==  nvRiWX
            || (nanRiWX+3)%5 ==  nvRiWX )
    {
        strRet += "<li>��Ů˫���ദ����֮����������Ը񰮺á�Ϊ�˴�������Ĳ�Э���������ϻ�������п��ܻ���Զ��Ҫע�⹵ͨ�Ͱ��ݡ�</li>";
    };
    //��������Ů����
    if( (nanNianWX+2)%5 == nvRiWX 
            || (nanNianWX+3)%5 == nvRiWX )
    {
        strRet += "<li>Ů�����з��ҳ�ʱ�����ܻ�����Щ�����⣬Ҫע���ദ���⡣</li>";
    };
    //Ů������������
    if( (nvNianWX+2)%5 == nanRiWX
            || (nvNianWX+3)%5 == nanRiWX )
    {
        strRet += "<li>�з���Ů���ҳ�ʱ�����ܻ�����Щ�����⣬Ҫע���ദ���⡣</li>";
    }; 
    if( strRet.length < 5 )//û����
    {
        //������ն���ͬ���ϻ���㲻һ��
        if( (bzppNan.iNianJZ != bzppNv.iNianJZ)
                || (bzppNan.iRiJZ != bzppNv.iRiJZ) )//���ղ�ͬ
        {
            strRet += "<li>˫�������ϻ�ܺã���ͥ�Ƚϰ��䣬�����г�����¼�����</li>";
        }
        else
        {
            //���ն���ͬ
            if(scoreYuanJu >= 50)//���պϻ��ж�
            {
                strRet += "<li>˫�������ϻ�Ϻã���ͥ�Ƚϰ��䣬�����г�����¼�����</li>";
            }
            else
            {
                strRet += "<li>˫���Ը�̫�������ദ���˿��ܾ��þ뵡�����ͻ��Ҫע�⻯��ì�ܡ�</li>";
            }
        }
    };
    return strRet;
}
//�з���Ů����������Ϣ
function GetMingJuInfo(bzpp)
{
    var strRet = "";
    //�Ը�
    strRet += "<li>" + bzpp.Gender  + "���Ը�<br>��" + NaYinXingGe[ Math.floor( bzpp.iRiJZ/2 ) ]
            + "<br>��"
            + NaYinXingGe[ Math.floor( bzpp.iShiJZ/2 ) ]
            + "</li>" ;
    
    //���޹�
    //�ո�����
    var rgWX = Math.floor( (bzpp.iRiJZ % 10)/2 );
    //��֧����
    var rzBQ = DiZhiCangGan[ (bzpp.iRiJZ % 12) ][0];
    //��֧����
    var rzWX = Math.floor( rzBQ/2 );
    //�����ֵ
    var delta = (rzWX - rgWX + 5) % 5;
    strRet += "<li>���޹�ϵ��" + FuQiGong[delta] + "</li>";
    
    //������֧��ϵ�����
    strRet += GetRiZhuChongHeStr(bzpp);
    
    //���չ�ϵ
    //�������к���������
    var nianWX = NaYinWuXing[ Math.floor(bzpp.iNianJZ/2) ];
    var riWX = NaYinWuXing[ Math.floor(bzpp.iRiJZ/2) ];
    if( "Ů" ==  bzpp.Gender )
    {
        //Ů��
        if( (nianWX+2)%5 == riWX
                || (nianWX+3)%5 == riWX)
        {
            strRet += "<li>�븸ĸ��ϵ��Ů������������֮�࣬�븸ĸ�����ϻ��������Զ��С���ں�Ů����ĸ��̫�׽���Ҫע���ദ���⡣</li>";
        }
        else
        {
            strRet += "<li>�븸ĸ��ϵ��Ů���븸ĸ�ڸ����ϻ�������׽���С���ں�Ů����ĸ�ദ�ȽϺ�г��</li>";
        }
    }
    else
    {
        //����
        if( (nianWX+2)%5 == riWX
                || (nianWX+3)%5 == riWX)
        {
            strRet += "<li>�븸ĸ��ϵ����������������֮�࣬�븸ĸ�����ϻ��������Զ��С���ں��з���ĸ��̫�׽���Ҫע����ϱ���⡣</li>";
        }
        else
        {
            strRet += "<li>�븸ĸ��ϵ�������븸ĸ�ڸ����ϻ�������׽���С���ں��з���ĸ�ദ�ȽϺ�г��</li>";
        }
    }
    
    //��ʱ��ͷ���ж�
    var shiWX = NaYinWuXing[ Math.floor(bzpp.iShiJZ/2) ];
    if( (riWX+3)%5 == shiWX )//��ʱ��ͷ��
    {
        var strTemp = "<li>������ʱ��ͷ�ˣ�" + bzpp.Gender + "��" + HuiTouKeZai[riWX] 
                + "31��45��֮��Ӧ�֣���Ҫ�ر�С�ġ�������ܻ�����˳����顣" + "</li>" ;
        strRet += GetBoldText( GetRedText( strTemp ) );
    }
    
    return strRet;
}

//��ͷ��Ӧ��
var HuiTouKeZai = 
[
    "�нϴ������ֺ���Ҫע�ⰲȫ���ա�",//0ľ
    "���Բ����򣬾��񲻺á�",//1��
    "���������۵��Բ�����",//2��
    "�нϴ����֣����岻�ѡ�",//3��
    "�нϴ��֣�ע��θ��������������"//4ˮ
];
//
//���޹������֧���м�ȥ�������
var FuQiGong = 
[
//0 ͬ�ң��� ����
"����˫�����͡���������żͨ�����й�ͬ�İ��á�����Ը��ϰ��Ҳ���й�ͬ�㣬����ȽϺ�г�����׻�����⡣",
//1 ���� �� ����
"�����మ���͡���������ż�ǳ��ã����ľ������ݶ࣬ͨ����������ż���⸶�������ƻر���������Ϊ����żһ��Ҫ��֪�㡣",
//2 �ҿ� �� ��δ
"��ϲԩ�����͡�����С��С�ֱȽ϶࣬������ͷ��ܴ�β�͡���������ż�ܵñȽ϶࣬������Щ���ޡ�����ɽ����/Ů����������������Ҫ��������ż�źá�",
//3 ���� �� ����
"��ϲԩ�����͡�����С��С�ֱȽ϶࣬������ͷ��ܴ�β�͡���������ż�ܵñȽ��ϣ���ż��Щ���ޡ�����ɽ����/Ů��������������żҪ�����������źá�",
//4 ���� �� ����
"�����మ���͡���ż�������ǳ��ã������ذ����ݶ࣬ͨ����ż���������⸶�������ƻر���������Ϊ������һ��Ҫ��֪�㡣"
];
//30�������Ը�
var NaYinXingGe = 
[
    "Ϊ�˰���ö���ְҵҲ���ױ仯��ϲ�����������ϲ���ظ����ĵ��¡�",	//���н�
    "Ϊ��ϲ�����ᣬ���¶൫�����ö����⣬�Ƚϱ�����ϰ�߰��������",	//¯�л�
    "Ϊ�˷ǳ������ӣ����ӽ���Ȧ����Ե�Ϻá�",	//����ľ
    "·�����Ŀ����±Ƚ����·�������ͨ����Ӧ�����磬�������������ܰ�������",	//·����
    "��ǿ��ʤ���ö���ͨ��������Ȧ����ҵȦ���ͷͷ��",	//�����
    "С�Է��ѧ�����죬����������ǿ��ͨ������һ��֮�����������´�Ƣ��Ҳ��",	//ɽͷ��
    "�����ߣ����������ڼҵ��������ˮ���±Ƚ������ţ�Ҳ���׽����Դ�",	//����ˮ
    "���зǳ���ң����������Ҳϲ�����ɼҡ��������Ļ�����ɼ�����Ҳ�������ġ�",	//��ǽ��
    "�ȽϽ�������ȽϽ���������Ҳ�ܰ��ҡ�",	//������
    "��������Ƿǣ��Ƚ����ң�ϲ����ս����ҵ��ͨ������Ȱ�����ù�����",	//����ľ
    "���ң���ϸ���ܲ����������˿��������̽Ǳ�ʣ����������أ��ò¼ɡ�",	//Ȫ��ˮ
    "���ң��Լ�Ϊ�أ���ʶ���壬֪���ܸġ��������ʺͲ�������Ҳ������ƶ������",	//������
    "Ϊ�˰�ð����������Ƣ�����ã����ȶ�������󸻵Ķࡣ",	//���׻�
    "������ҵ��ϲ����ţ�԰ڣ���Ū���¡�",	//�ɰ�ľ
    "�׶��ģ������൱�ḻ��������ʧ���鳡��",	//����ˮ

    "�Ը�ȽϺ�ǿ�������ûʲô������ϲ�����ᡢ��ˣ������������ô�����",	//ɳ�н�
    "�����ߵͣ������������ڸգ��ó�����������",	//ɽ�»�
    "�������ǣ��������磬���ֺ��ˣ�Ҳ����ϲ������Ե����",	//ƽ��ľ
    "ϲ�����Ż��ɷ磬�������Լ����뷨��˼ά��ʽ������һ�Թ�֮�����Ұ����ӣ���Ҳ�Ƚ���̹Ű塣",	//������
    "����ۺܶ࣬Ҳϲ��������Ѱ�Ҵ̼��ĸо���Ƣ����������׽������ϲ����������͸��",	//�𲭽�
    "ϲ�����������������𣬾�����ҹ��ҹ��ȽϾ��񣬰�������ή�ҡ�",	//���ƻ�
    "���ˮ�����˰��£��Լ��������£�������������ˮͨ��ûʲô�����У����׸е���į�¼š�",	//���ˮ
    "���ؿ��ͨ����̬�Ϻã������������п���߷緶��",	//������
    "�ԳԴ����űȽϽ���������Ƚ���Ʒλ��ϲ��������Ѱ���ģ����������ɡ�",	//���˽�
    "ɣľ���ҵ�Ҳ�ö�����Ȥ���ö࣬ͨ���Ƚ���־�򣬵�Ҳ��Щ����ʵ�ʵ��뷨��",	//ɣ��ľ
    "ͨ������Ů����ϸ��˿��������ȥ������ŵ䣬��������Ҳ�Ƚ�С��ĳЩ����ǵ��ر������",	//��Ϫˮ
    "ϲ����ǿ�����䣬���㶥��סҲҪ���ŵ����͡�����ǿ�󣬵��������ڿ͹��������޶��ѷ��ӡ�������ͨ������ż�������ˡ�",	//ɳ����
    "Ƣ�����ã��������ȣ����뷨�Գ�����˵����׽�������Ƚϰ��ҡ����ϻ�ͨ�������Լ��������ں�������֣���˵�󲻴�˵С��С���������ܡ�",	//���ϻ�
    "Ϊ��������ϲ�����Լ�����������ģ��������Լ��ǻʵ�/Ů��������������������������͹�ԡ�",	//ʯ��ľ
    "ͨ�����Ĵ��⣬�������壬ֻ���Լ��뷨����������ʵ�ʡ���ʵ��ͨ������ʵ�����뷨�����׳��ֻ�����˳����顣"	//��ˮ
];

//ͷ̥����Ԥ��������ֵ"����"��"Ů��"
function GetTouTaiString(bzppNan, bzppNv)
{
    var ttGender = "";
    //�з���ʱ������������Ů����ʱ����������
    var sumNan = 0;
    var sumNv = 0;
    //��������������ʱ������
    var nanRiWX = NaYinWuXing[ Math.floor(bzppNan.iRiJZ/2) ];
    var nanShiWX = NaYinWuXing[ Math.floor(bzppNan.iShiJZ/2) ];
    //Ů��������ʱ������
    var nvRiWX = NaYinWuXing[ Math.floor(bzppNv.iRiJZ/2) ];
    var nvShiWX = NaYinWuXing[ Math.floor(bzppNv.iShiJZ/2) ];
    //�ж���ʱ�Ƿ�������ͬ��������ͬ�� sum Ϊ0��������
    //�����к�
    if( nanRiWX === nanShiWX )
    {
        sumNan = 0; //��
    }
    else
    {
        //�������0��ʼ����1���Ѽ��ӱ�ɴ�1��ʼ����������Ϊ��
        sumNan = (bzppNan.iRiJZ + 1)%2 + (bzppNan.iShiJZ + 1)%2;
        sumNan = sumNan % 2;    //0������1����
    }
    //����Ů��
    if( nvRiWX === nvShiWX )
    {
        sumNv = 0;  //��
    }
    else
    {
        sumNv = (bzppNv.iRiJZ + 1)%2 + (bzppNv.iShiJZ + 1)%2;
        sumNv = sumNv % 2;  //0������1����
    }
    //�����ܺ�
    var sumAll = (sumNan + sumNv) % 2;
    //�Ա�
    if( 1 === sumAll )
    {
        ttGender = "����";
    }
    else
    {
        ttGender = "Ů��";
    }
    //����
    return ttGender;
}

/*
�ɰ�����ƥ��û�м�Ȩ����������Ȩ��һ���������Ķ�δ��Ů���������ĺϻ�
����ƥ��ȣ�101 ����
����ƥ��ȣ�91  ����
�����ۺϷ֣�96  ����

�پ�һ��
����������1984��8��11��20ʱ0�֣� ����
���� ���� ���� ����
����������1992��1��27��2ʱ0�֣� ��һ
��δ ���� ���� ����
******************************
����ƥ��ȣ�101	����
����ƥ��ȣ�92	����
�����ۺϷ֣�97	����
******************************
 *  ����ƥ���92������ʵ�ϵ����֣�������100�֣���Ҫ����
��Ȩ������60���5�飬12��һ�Σ��ֱ��Ȩ���ϼ�110%����΢�Ŵ�һ�£������ֶ���100
20-31   0.35
32-43   0.35
44-55   0.20
56-67   0.12
68-79   0.08
 */
//�����Ȩ�������ƥ���
function CalcJiaQuanYunShiScore(tongArray, chaArray)
{
    var scoreRet = 0; //���صļ�Ȩ��ֵ
    //��Ϊ���
    var Weight = [0.35, 0.35, 0.20, 0.12, 0.08];
    var arrayScores = new Array(5);
    //��Ϊ��μ���
    var curSumTong = 0;
    var curSumCha = 0;
    for(var i=0; i<5; i++)
    {
        //��ǰ12�����ֵͬ���ܲ�ֵ
        curSumTong = 0;
        curSumCha = 0;
        for(var j=0; j<12; j++)
        {
            //����
            curSumTong += tongArray[i*12 + j];
            curSumCha += chaArray[i*12 + j];
        }
        //���㵱ǰ12����ƥ���ֵ
        arrayScores[i] = 100 * curSumTong / (curSumTong +  curSumCha + 0.0001 ); //��ĸ��С������ֹ��0
        //�����Ȩ��ֵ
        scoreRet += (arrayScores[i] * Weight[i]);
    }
    //��������
    scoreRet = Math.floor( scoreRet + 0.5 );
    //��100�İ�100����
    if( scoreRet > 100 )
    {
        scoreRet = 100;
    }
    
    //����
    return scoreRet;
}

//���ݰ������̣�ͳ����ɺ͵�֧��Ŀ
function CalcGanZhiCount(bzpp)
{
    //���ؼ�������
    var gzCount = new Object();
    gzCount.ganArray = new Array(12);   //��ɼ������飬ĩβ��������
    gzCount.zhiArray = new Array(12);   //��֧��������
    for(var i=0; i<12; i++)//����ʼ��Ϊ0
    {
        gzCount.ganArray[i] = 0;
        gzCount.zhiArray[i] = 0;
    }
    //�ĸ���ɼ���
    gzCount.ganNian = bzpp.iNianJZ % 10;
    gzCount.ganArray[ gzCount.ganNian ] += 1;
    gzCount.ganYue = bzpp.iYueJZ % 10;
    gzCount.ganArray[ gzCount.ganYue ] += 1;
    gzCount.ganRi = bzpp.iRiJZ % 10;
    gzCount.ganArray[ gzCount.ganRi ] += 1;
    gzCount.ganShi = bzpp.iShiJZ % 10;
    gzCount.ganArray[ gzCount.ganShi ] += 1;
    //�ĸ���֧����
    gzCount.zhiNian = bzpp.iNianJZ % 12;
    gzCount.zhiArray[ gzCount.zhiNian ] += 1;
    gzCount.zhiYue = bzpp.iYueJZ % 12;
    gzCount.zhiArray[ gzCount.zhiYue ] += 1;
    gzCount.zhiRi = bzpp.iRiJZ % 12;
    gzCount.zhiArray[ gzCount.zhiRi ] += 1;
    gzCount.zhiShi = bzpp.iShiJZ % 12;
    gzCount.zhiArray[ gzCount.zhiShi ] += 1;
    //���ؼ���
    return gzCount;
}
//��ȡ������֧��ϵ�����
function GetRiZhuChongHeStr(bzpp)
{
    //����ַ���
    var strRet = "";
    //�����֧����
    var gzCount = CalcGanZhiCount(bzpp);
    //��֧����
    var riZhi = gzCount.zhiRi;
    var rzLiuChong = (riZhi+6) % 12;
    if( gzCount.zhiArray[ rzLiuChong ] > 0 )
    {
        //��������λ��֧
        strRet += "<li>��֧���壺��Ҫע����������������ż�����ķ��硢���������ͼ�ͥì�ܣ�����Ӱ�����������</li>";
    }
    //��֧����
    var rzLiuHe = DZLiuHe[ riZhi ];
    if( gzCount.zhiArray[ rzLiuHe ] > 0 )
    {
        strRet += "<li>��֧���ϣ���Ҫע�����������⣬���ƴ��������ס�</li>";
    }
    //�������
    var riGan = gzCount.ganRi;
    //�ո����
    var rgWuHe = (riGan+5) % 10;
    if( gzCount.ganArray[ rgWuHe ] > 0 )
    {
        //�����ո����
        //�ж��Ƿ����ϣ��ո����������ϣ�����ϵ������������
        if( (gzCount.ganArray[ rgWuHe ] >= 2)
                || (gzCount.ganArray[riGan] >= 2) )
        {
            //��������
            strRet += "<li>�ո����ϣ���Ҫע�����������⣬���ƴ��������ס�</li>";
        }
        else//û�����ϣ��������
        {
            //�������
            strRet += "<li>�ո���ϣ��������������</li>";
        }
    }
    //���������������ӳ��Һͣ����ӳ�Т˳
    if(  ( gzCount.zhiArray[0]>0 )
            && ( gzCount.zhiArray[4]>0 )
            && ( gzCount.zhiArray[8]>0 ) )//�� 0  ��4   ��8
    {
        strRet += "<li>�Һͷ�����ͥͨ���ȽϺ�г������</li>";
    }
    if(  ( gzCount.zhiArray[0]>0 )
            && ( gzCount.zhiArray[4]>0 )
            && ( gzCount.ganArray[0]>0 ) )//�� 0  ��4   ��0
    {
        strRet += "<li>Т˳���������Ը�ĸ������Т˳��</li>";
    }
    //����
    return strRet;
}
