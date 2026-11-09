import type {ResourceDef} from '../types'
export const resources:ResourceDef[] = [
  {
    "key": "animals",
    "title": "الأغنام",
    "singular": "ذبيح",
    "description": "إدارة بيانات القطيع والأرقام التعريفية والحالة.",
    "fields": [
      {
        "key": "tag",
        "label": "رقم الذبيح",
        "type": "text"
      },
      {
        "key": "type",
        "label": "النوع",
        "type": "select",
        "options": [
          "نعيمي",
          "حري",
          "سواكني",
          "نجدي",
          "أخرى"
        ]
      },
      {
        "key": "gender",
        "label": "الجنس",
        "type": "select",
        "options": [
          "ذكر",
          "أنثى"
        ]
      },
      {
        "key": "birthDate",
        "label": "تاريخ الميلاد",
        "type": "date"
      },
      {
        "key": "weight",
        "label": "الوزن الحالي (كجم)",
        "type": "number"
      },
      {
        "key": "status",
        "label": "الحالة",
        "type": "select",
        "options": [
          "نشط",
          "مباع",
          "مذبوح",
          "مريض"
        ]
      },
      {
        "key": "purchasePrice",
        "label": "سعر الشراء (ر.س)",
        "type": "number"
      }
    ],
    "columns": [
      "tag",
      "type",
      "gender",
      "weight",
      "status"
    ]
  },
  {
    "key": "purchases",
    "title": "المشتريات",
    "singular": "عملية شراء",
    "description": "تسجيل مشتريات الأغنام والأعلاف والمستلزمات.",
    "fields": [
      {
        "key": "reference",
        "label": "رقم الفاتورة",
        "type": "text"
      },
      {
        "key": "supplier",
        "label": "المورد",
        "type": "text"
      },
      {
        "key": "date",
        "label": "التاريخ",
        "type": "date"
      },
      {
        "key": "item",
        "label": "الصنف",
        "type": "text"
      },
      {
        "key": "quantity",
        "label": "الكمية",
        "type": "number"
      },
      {
        "key": "total",
        "label": "الإجمالي (ر.س)",
        "type": "number"
      },
      {
        "key": "status",
        "label": "الحالة",
        "type": "select",
        "options": [
          "مدفوعة",
          "آجلة",
          "جزئية"
        ]
      }
    ],
    "columns": [
      "reference",
      "supplier",
      "date",
      "item",
      "quantity",
      "total"
    ]
  },
  {
    "key": "suppliers",
    "title": "الموردون",
    "singular": "مورد",
    "description": "إدارة بيانات الموردين ووسائل التواصل.",
    "fields": [
      {
        "key": "name",
        "label": "اسم المورد",
        "type": "text"
      },
      {
        "key": "phone",
        "label": "رقم الجوال",
        "type": "text"
      },
      {
        "key": "city",
        "label": "المدينة",
        "type": "text"
      },
      {
        "key": "category",
        "label": "نوع التوريد",
        "type": "select",
        "options": [
          "أغنام",
          "أعلاف",
          "أدوية",
          "معدات",
          "متنوع"
        ]
      },
      {
        "key": "balance",
        "label": "الرصيد المستحق (ر.س)",
        "type": "number"
      },
      {
        "key": "notes",
        "label": "ملاحظات",
        "type": "textarea"
      }
    ],
    "columns": [
      "name",
      "phone",
      "city",
      "category",
      "balance"
    ]
  },
  {
    "key": "feeding",
    "title": "التغذية",
    "singular": "سجل تغذية",
    "description": "متابعة الأعلاف والكميات والتكاليف اليومية.",
    "fields": [
      {
        "key": "date",
        "label": "التاريخ",
        "type": "date"
      },
      {
        "key": "feedType",
        "label": "نوع العلف",
        "type": "text"
      },
      {
        "key": "quantity",
        "label": "الكمية (كجم)",
        "type": "number"
      },
      {
        "key": "group",
        "label": "المجموعة/الحظيرة",
        "type": "text"
      },
      {
        "key": "cost",
        "label": "التكلفة (ر.س)",
        "type": "number"
      },
      {
        "key": "notes",
        "label": "ملاحظات",
        "type": "textarea"
      }
    ],
    "columns": [
      "date",
      "feedType",
      "quantity",
      "group",
      "cost"
    ]
  },
  {
    "key": "care",
    "title": "الرعاية والعلاج",
    "singular": "سجل رعاية",
    "description": "تسجيل العلاجات والتحصينات والمتابعة البيطرية.",
    "fields": [
      {
        "key": "animalTag",
        "label": "رقم الذبيح",
        "type": "text"
      },
      {
        "key": "date",
        "label": "التاريخ",
        "type": "date"
      },
      {
        "key": "type",
        "label": "نوع الإجراء",
        "type": "select",
        "options": [
          "علاج",
          "تحصين",
          "فحص",
          "متابعة"
        ]
      },
      {
        "key": "description",
        "label": "التفاصيل",
        "type": "textarea"
      },
      {
        "key": "vet",
        "label": "الطبيب البيطري",
        "type": "text"
      },
      {
        "key": "cost",
        "label": "التكلفة (ر.س)",
        "type": "number"
      },
      {
        "key": "nextDate",
        "label": "موعد المتابعة",
        "type": "date"
      }
    ],
    "columns": [
      "animalTag",
      "date",
      "type",
      "vet",
      "cost"
    ]
  },
  {
    "key": "growth",
    "title": "الأوزان والنمو",
    "singular": "قياس وزن",
    "description": "متابعة تطور أوزان الأغنام ومعدلات النمو.",
    "fields": [
      {
        "key": "animalTag",
        "label": "رقم الذبيح",
        "type": "text"
      },
      {
        "key": "date",
        "label": "تاريخ القياس",
        "type": "date"
      },
      {
        "key": "weight",
        "label": "الوزن (كجم)",
        "type": "number"
      },
      {
        "key": "bodyCondition",
        "label": "حالة الجسم",
        "type": "select",
        "options": [
          "ممتازة",
          "جيدة",
          "متوسطة",
          "ضعيفة"
        ]
      },
      {
        "key": "notes",
        "label": "ملاحظات",
        "type": "textarea"
      }
    ],
    "columns": [
      "animalTag",
      "date",
      "weight",
      "bodyCondition"
    ]
  },
  {
    "key": "slaughter",
    "title": "عمليات الذبح",
    "singular": "عملية ذبح",
    "description": "تسجيل بيانات الذبح والأوزان والتصافي.",
    "fields": [
      {
        "key": "animalTag",
        "label": "رقم الذبيح",
        "type": "text"
      },
      {
        "key": "date",
        "label": "تاريخ الذبح",
        "type": "date"
      },
      {
        "key": "liveWeight",
        "label": "الوزن الحي (كجم)",
        "type": "number"
      },
      {
        "key": "carcassWeight",
        "label": "وزن الذبيحة (كجم)",
        "type": "number"
      },
      {
        "key": "wasteWeight",
        "label": "الفاقد (كجم)",
        "type": "number"
      },
      {
        "key": "slaughterhouse",
        "label": "المسلخ",
        "type": "text"
      },
      {
        "key": "notes",
        "label": "ملاحظات",
        "type": "textarea"
      }
    ],
    "columns": [
      "animalTag",
      "date",
      "liveWeight",
      "carcassWeight",
      "slaughterhouse"
    ]
  },
  {
    "key": "customers",
    "title": "العملاء",
    "singular": "عميل",
    "description": "إدارة بيانات العملاء وطرق التواصل.",
    "fields": [
      {
        "key": "name",
        "label": "اسم العميل",
        "type": "text"
      },
      {
        "key": "phone",
        "label": "رقم الجوال",
        "type": "text"
      },
      {
        "key": "city",
        "label": "المدينة",
        "type": "text"
      },
      {
        "key": "email",
        "label": "البريد الإلكتروني",
        "type": "text"
      },
      {
        "key": "balance",
        "label": "الرصيد (ر.س)",
        "type": "number"
      },
      {
        "key": "notes",
        "label": "ملاحظات",
        "type": "textarea"
      }
    ],
    "columns": [
      "name",
      "phone",
      "city",
      "email",
      "balance"
    ]
  },
  {
    "key": "sales",
    "title": "المبيعات",
    "singular": "عملية بيع",
    "description": "تسجيل عمليات البيع والأسعار والعملاء.",
    "fields": [
      {
        "key": "invoice",
        "label": "رقم الفاتورة",
        "type": "text"
      },
      {
        "key": "date",
        "label": "التاريخ",
        "type": "date"
      },
      {
        "key": "customer",
        "label": "العميل",
        "type": "text"
      },
      {
        "key": "animalTag",
        "label": "رقم الذبيح",
        "type": "text"
      },
      {
        "key": "quantity",
        "label": "الكمية",
        "type": "number"
      },
      {
        "key": "total",
        "label": "الإجمالي (ر.س)",
        "type": "number"
      },
      {
        "key": "payment",
        "label": "طريقة الدفع",
        "type": "select",
        "options": [
          "نقدي",
          "تحويل",
          "آجل",
          "شبكة"
        ]
      },
      {
        "key": "status",
        "label": "الحالة",
        "type": "select",
        "options": [
          "مكتملة",
          "معلقة",
          "ملغاة"
        ]
      }
    ],
    "columns": [
      "invoice",
      "date",
      "customer",
      "animalTag",
      "total",
      "status"
    ]
  },
  {
    "key": "payments",
    "title": "المدفوعات والتحصيل",
    "singular": "دفعة",
    "description": "متابعة التحصيلات والمدفوعات والمبالغ المستحقة.",
    "fields": [
      {
        "key": "reference",
        "label": "رقم المرجع",
        "type": "text"
      },
      {
        "key": "date",
        "label": "التاريخ",
        "type": "date"
      },
      {
        "key": "party",
        "label": "الطرف",
        "type": "text"
      },
      {
        "key": "kind",
        "label": "النوع",
        "type": "select",
        "options": [
          "تحصيل من عميل",
          "دفع لمورد"
        ]
      },
      {
        "key": "method",
        "label": "طريقة الدفع",
        "type": "select",
        "options": [
          "نقدي",
          "تحويل",
          "شبكة"
        ]
      },
      {
        "key": "amount",
        "label": "المبلغ (ر.س)",
        "type": "number"
      },
      {
        "key": "notes",
        "label": "ملاحظات",
        "type": "textarea"
      }
    ],
    "columns": [
      "reference",
      "date",
      "party",
      "kind",
      "method",
      "amount"
    ]
  },
  {
    "key": "expenses",
    "title": "المصروفات",
    "singular": "مصروف",
    "description": "إدارة مصروفات التشغيل والتربية والمصاريف الأخرى.",
    "fields": [
      {
        "key": "date",
        "label": "التاريخ",
        "type": "date"
      },
      {
        "key": "category",
        "label": "التصنيف",
        "type": "select",
        "options": [
          "أعلاف",
          "علاج",
          "عمالة",
          "نقل",
          "صيانة",
          "أخرى"
        ]
      },
      {
        "key": "description",
        "label": "البيان",
        "type": "text"
      },
      {
        "key": "amount",
        "label": "المبلغ (ر.س)",
        "type": "number"
      },
      {
        "key": "paidBy",
        "label": "طريقة الدفع",
        "type": "select",
        "options": [
          "نقدي",
          "تحويل",
          "شبكة"
        ]
      },
      {
        "key": "notes",
        "label": "ملاحظات",
        "type": "textarea"
      }
    ],
    "columns": [
      "date",
      "category",
      "description",
      "amount",
      "paidBy"
    ]
  }
]
export const resourceByKey=(key:string)=>resources.find(r=>r.key===key)
