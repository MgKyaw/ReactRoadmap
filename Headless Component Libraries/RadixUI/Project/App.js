import { Theme, ThemePanel } from "@radix-ui/themes";

export default function () {
	return (
		<html>
			<body>
				{/* <Theme>
					<MyApp />
				</Theme>
                 */}
                 <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
                    <MyApp />
			        <ThemePanel />
                </Theme>
			</body>
		</html>
	);
}
