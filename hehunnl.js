//������������ʱ��� 1583 �� �� 3199 �꣬�������������һ�굽3200ǰһ�꣬3200���Ƿ�Ϊ���������
//ȫ�ֱ���������ʼʱ��ͽ���ʱ���һ�¾Ϳ��Ը������̵���ݷ�Χ������Ϊ�����240��ʱ��Ρ�
var gStartYear = 1924;
var gEndYear = 2164;
//��ͼ�ؼ�
var syCanvas = document.getElementById("syCanvas");
//�з�������ʱ�֣�ũ�����·ݺ����Ӷ�����ţ���0���
var nanYear = document.getElementById("nanYear");
var nanMonth = document.getElementById("nanMonth");
var nanDay = document.getElementById("nanDay");
var nanHour = document.getElementById("nanHour");
var nanMinute = document.getElementById("nanMinute");
//Ů��������ʱ�֣�ũ�����·ݺ����Ӷ�����ţ���0���
var nvYear = document.getElementById("nvYear");
var nvMonth = document.getElementById("nvMonth");
var nvDay = document.getElementById("nvDay");
var nvHour = document.getElementById("nvHour");
var nvMinute = document.getElementById("nvMinute");

//ũ����ݺ͵�������
//�з�
var gNanNLYear = 2000;  //�����з���ǰ��ũ�����
var gNanNongLiYueBiao;  //�����з���ǰ��ũ���±�
//Ů��
var gNvNLYear = 2000;  //����Ů����ũ�����
var gNvNongLiYueBiao;  //����Ů����ũ���±�

/**************************************************/
//ũ���ؼ��ĳ�ʼ���Ͷ�̬����
function InitNLYears()    //��ʼ��ʱһ���Ե���
{
    //��վɵ�
    nanYear.length = 0;  
    nvYear.length = 0;
    var curOpNan;
    var curOpNv;
    for(var i=gStartYear; i<=gEndYear; i++)
    {
        //�з�
        curOpNan = document.createElement('option');
        curOpNan.value = i;
        curOpNan.text = String(i) + JiaZi[ GetNianJiaZiShu(i) ];
        nanYear.add(curOpNan, null);
        //Ů��
        curOpNv = document.createElement('option');
        curOpNv.value = i;
        curOpNv.text = String(i) + JiaZi[ GetNianJiaZiShu(i) ];
        nvYear.add(curOpNv, null);
    }
    //Ĭ��ѡ��2000��
    nanYear.selectedIndex = 2000 - gStartYear;
    nvYear.selectedIndex = 2000 - gStartYear;
    //�����з���Ů���ĳ�ʼ��ݡ���ʼũ���±�
    gNanNLYear = 2000;
    gNanNongLiYueBiao = GetNongLiYueBiao( gNanNLYear );
    //����з�ũ���·�
    nanMonth.length = 0;//����ɵ�
    for(var i=0; i<gNanNongLiYueBiao.yueCount; i++)
    {
        addOp(nanMonth, i, gNanNongLiYueBiao.arrayNames[i] );
    }
    //Ů��
    gNvNLYear = 2000;
    gNvNongLiYueBiao = GetNongLiYueBiao( gNvNLYear );
    //���Ů��ũ���·�
    nvMonth.length = 0;//����ɵ�
    for(var i=0; i<gNvNongLiYueBiao.yueCount; i++)
    {
        addOp(nvMonth, i, gNvNongLiYueBiao.arrayNames[i] );
    }
    //����������
}
//ũ���·ݺ����Ӷ�����ţ���0��ʼ���
//��ʼ��ũ��2000�� ���´�30��
function InitNLDays() //��ʼ��ʱһ���Ե���
{
    //��վɵ�һ��ѡ��
    nanDay.length = 0;
    nvDay.length = 0;
    var curOpNan;
    var curOpNv;
    //���ũ����ʮ��
    for(var i=0; i<30; i++)
    {
        curOpNan = document.createElement('option');
        curOpNan.value = i;
        curOpNan.text = NLDayName[i];
        nanDay.add(curOpNan, null);
        //Ů
        curOpNv = document.createElement('option');
        curOpNv.value = i;
        curOpNv.text = NLDayName[i];
        nvDay.add(curOpNv, null);
    }
}

//ũ����ݱ仯���·ݱ仯����������Ҳ�б仯
function OnNanYearChanged()
{
    gNanNLYear = Number( nanYear.options[ nanYear.selectedIndex ].value );
    gNanNongLiYueBiao =  GetNongLiYueBiao( gNanNLYear );
    //��վɵ��·��б�
    nanMonth.length = 0;
    //����µ�
    for(var i=0; i<gNanNongLiYueBiao.yueCount; i++)
    {
        addOp( nanMonth, i, gNanNongLiYueBiao.arrayNames[i] );
    }
    nanMonth.selectedIndex = 0;//����
    OnNanMonthChanged(); //�·ݴ��������б�仯  
}
//�����·ݱ仯�������Ƿ�������ڣ�29���30�죬�����ٲ�
function OnNanMonthChanged()
{
    //�ɵļ���
    var oldCount = nanDay.length;
    //�µļ���
    var newCount =  gNanNongLiYueBiao.arrayDaysCount[ nanMonth.selectedIndex ];
    //����¾����
    if( oldCount == newCount )
    {
        return;
    }
    //��������
    if( 29 < newCount ) //�ɵ�29�죬�µ�30��
    {
        addOp(nanDay, 30-1, NLDayName[30-1]); //���� ��ʮ
        return;
    };
    if( oldCount > 29 )//�ɵ�30�죬�µ�29��
    {
        nanDay.remove( 30-1 );//ȥ�����
        return;
    }
}

//ũ����ݱ仯�������·ݡ����ӣ�ȫ���仯
function OnNvYearChanged()
{
    gNvNLYear = Number( nvYear.options[ nvYear.selectedIndex ].value );
    gNvNongLiYueBiao =  GetNongLiYueBiao( gNvNLYear );
    //��վɵ��·��б�
    nvMonth.length = 0;
    //����µ�
    for(var i=0; i<gNvNongLiYueBiao.yueCount; i++)
    {
        addOp( nvMonth, i, gNvNongLiYueBiao.arrayNames[i] );
    }
    nvMonth.selectedIndex = 0;
    OnNvMonthChanged(); //�·ݴ��������б�仯
}
//�·ݱ仯���������ӣ�29���30�죬�����ٲ�
function OnNvMonthChanged()
{
    //�ɵļ���
    var oldCount = nvDay.length;
    //�µļ���
    var newCount =  gNvNongLiYueBiao.arrayDaysCount[ nvMonth.selectedIndex ];
    //����¾����
    if( oldCount == newCount )
    {
        return;
    }
    //��������
    if( 29 < newCount ) //�ɵ�29�죬�µ�30��
    {
        addOp(nvDay, 30-1, NLDayName[30-1]); //���� ��ʮ
        return;
    };
    if( oldCount > 29 )//�ɵ�30�죬�µ�29��
    {
        nvDay.remove( 30-1 );//ȥ�����
        return;
    } 
}

/////////////////////////////////////////////////////////////////////
//���������ı�
var AllText = document.getElementById("AllText");
//����ϻ�����
function CalcHeHunPanPai()
{
    //��ȡ�з�������Ϣ
   var ixNanYue = Number( nanMonth.selectedIndex ); //����
   var ixNanRi = Number( nanDay.selectedIndex );    //����
   var hhNan = Number( nanHour.options[ nanHour.selectedIndex ].value );//Сʱ -1 �� 22
   var mmNan = Number( nanMinute.selectedIndex ); //���� 0 �� 59
   var ssNan = 30;  //Ĭ�ϰ�30��
   //��������������
   var birthNan = NongLiDayToJD(gNanNongLiYueBiao, ixNanYue, ixNanRi, hhNan, mmNan, ssNan);
   ////////////////////////////
   //��ȡŮ��������Ϣ
   var ixNvYue = Number( nvMonth.selectedIndex );   //����
   var ixNvRi = Number( nvDay.selectedIndex );  //����
   var hhNv = Number( nvHour.options[ nvHour.selectedIndex ].value );//Сʱ-1��22
   var mmNv = Number( nvMinute.selectedIndex  );    //����
   var ssNv = 30;   //Ĭ�ϰ�30��
   //����Ů��������
   var birthNv = NongLiDayToJD(gNvNongLiYueBiao, ixNvYue, ixNvRi, hhNv, mmNv, ssNv);

    //ͨ�����̺����������ǳ�������ͨʱ�������ա��Ա𡢳����ؾ��ȡ��Ƿ���̫��
    //���� bzpp ����
    var bzppNan =  CalcBaZiObject(birthNan, "��", 120, 0);//��������
    var bzppNv = CalcBaZiObject(birthNv, "Ů", 120, 0);//Ů������
    //
    //�ж��Ƿ���Ҫ��ͼ
    var bDraw = Number( document.getElementById("sDrawPic").value );
    //console.log(syCanvas); 
    //���ֺϻ�
    AllText.innerHTML = GetHeHunHTML(bzppNan, bzppNv
            , bDraw, syCanvas); //������������ʾ �Ƿ��ͼ
            
    //�������ƺϻ�ͼ��˵��
    
    if( 1 == bDraw  )//��ͼʱ����ʾ˵��
    {
        //˵�������ֶζ���
        var shuoming = document.getElementById("YunShiHeHunShuoMing");
        shuoming.innerHTML = "����ƥ��ͼ˵����<br>" +
            "����ɫ���ߴ����������ƣ��Ϻ�ɫ���ߴ���Ů�����ƣ�ƥ��ʱ����Ǵ�����С����λ20����㵽80�ꡣ<br>" +
            "����ɫ������Эͬ���֣�����ɫ�����ǲ��첿�֣���ɫ����ȷۺ���������Խ�󣬴�������ƥ��Խ�á�<br>" +
            "����ֱ�����Ƿ�ֵ�̶ȣ���ֵ�ߵ�����������ֵ�͵����Ʋ������ַ�ֵ����0�֣���ע��������֡�" ;
    };

    //ִ���Զ����Ƶ������壬IE9��Chrome֧�֣�������Բ��С�
    document.execCommand("selectAll");  //ȫѡ
    document.execCommand("copy");       //����
    document.execCommand("unselect");   //��ѡ�� 
}

