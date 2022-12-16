const template = {
  'DataList|5-50': [
    {
      'duid|13': /[A-z][0-9]/,
      'sn|13': /[A-z][0-9]/,
      onWithdrawAmount: {
        value: '',
        fenValue: '',
        'unit|1': ['YUAN', 'FEN'],
        display: 
      },
      type: 'PRIMARY',
      typeLabel: '分销商类型名',
      name: '@cname',
      company: '@csentence(5, 10)',
      site: '',
      areaCode: '',
      phone: /^13[0-9]{9}/,
      phoneWithAreaCode: '',
      bizEmail: '',
      // 国家
      region: '@region',
      // 国家 / 地区名
      regionName: '',
      // 省份
      province: '@province',
      // 城市
      city: '@city',
      // 街道
      street: '',
      // 邮编
      zipCode: '',
      // 收款账号类型
      wdAccountType: '',
      // 收款账号
      wdAccount: '',
      // 账号状态：0：审核中；1：已审核
      stateLabel: '',
      // 审核人
      approvalBy: '@cname()',
      // 创建时间
      createdAt: '@datetime("yyyy-MM-dd HH:mm:ss")',
      // 更新时间
      updatedAt: '@datetime("yyyy-MM-dd HH:mm:ss")',
      // 删除时间
      deletedAt: '@datetime("yyyy-MM-dd HH:mm:ss")',
      // 是否可以删除 默认true
      deletable: ''
    }
  ]
}
export default template
