// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = Record<string, Device[]> & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	Phone: [
		{
			name: "Redmi K70E",
			image: "/images/device/Redmi K70E.jpg",
			specs: "影青 / 12G + 256GB",
			description: "新一代旗舰焊门员K70E 全面提升旗舰性能体验基线",
			link: "https://www.mi.com/redmi-k70e",
		},
	],
};
