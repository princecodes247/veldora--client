import { ProfileForm } from "@/components/settings/ProfileForm";
import { Separator } from "@/components/ui/separator";
import SettingsLayout from "@/layouts/Settings.layout";

export default function SettingsProfilePage() {
  return (
    <SettingsLayout>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Account</h3>
          <p className="text-sm text-muted-foreground">
            The details of your veldora account
          </p>
        </div>
        <Separator />
        <ProfileForm />
      </div>
    </SettingsLayout>
  );
}
